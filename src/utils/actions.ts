"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateSchema } from "./schemas";
import { getAdminUser } from "./getAdminUser";
import { revalidatePath } from "next/cache";
import { uploadImageToCloudinary } from "./uploadImageToCloudinary";
import { getCloudinaryImagePublicId } from "./getCloudinaryImagePublicId";
import cloudinary from "@/lib/cloudinary";

// FETCH FEATURED PRODUCTS
export async function fetchFeaturedProducts() {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
      },
    });
    return products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unkown Error Occured.");
  }
}

// FETCH ALL PRODUCTS
export async function fetchProducts({
  searchValue = "",
}: {
  searchValue?: string;
}) {
  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchValue,
              mode: "insensitive",
            },
          },
          {
            company: {
              contains: searchValue,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unkown Error Occured.");
  }
}

// FETCH PRODUCT BY ID
export async function fetchSingleProduct(productId: string) {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });
    if (!product) redirect("/products");
    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unkown Error Occured.");
  }
}

// CREATE PRODUCT
export async function createProduct(
  _prevState: any,
  formData: FormData,
): Promise<{ message: string }> {
  const user = await getAdminUser();
  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;
    const validatedData = validateSchema(productSchema, rawData);
    const validateFile = validateSchema(imageSchema, { image: file });
    const imageUrl = await uploadImageToCloudinary(validateFile.image);
    const imagePublicId = getCloudinaryImagePublicId(imageUrl);

    await prisma.product.create({
      data: {
        ...validatedData,
        image: imageUrl,
        imagePublicId: imagePublicId,
        clerkId: user.id,
      },
    });
    return { message: "Product Created Successfully." };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "Unkown Error Occured." };
  }
}

// FETCH ADMIN PRODUCTS
export async function fetchAdminProducts() {
  await getAdminUser();
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Unkown Error Occured.");
  }
}

// DELETE PRODUCT
export async function deleteProduct(prevState: {
  productId: string;
  imagePublicId: string;
}) {
  const { productId, imagePublicId } = prevState;
  await getAdminUser();
  try {
    await cloudinary.uploader.destroy(imagePublicId);
    await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    revalidatePath("/admin/products");
    return { message: "Product Deleted Successfully." };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "Unkown Error Occured." };
  }
}

// UPDATE PRODUCT
export async function updateProduct(prevState: any, formData: FormData) {
  await getAdminUser();
  try {
    const productId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);
    const validatedData = validateSchema(productSchema, rawData);
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedData,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: "Product Updated Successfully." };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "Unkown Error Occured." };
  }
}

// UPDATE PRODUCT IMAGE
export async function updateProductImage(prevState: any, formData: FormData) {
  await getAdminUser();
  try {
    const productId = formData.get("id") as string;
    const file = formData.get("image") as File;
    const oldImagePublicId = formData.get("imagePublicId") as string;
    const validateFile = validateSchema(imageSchema, { image: file });
    const imageUrl = await uploadImageToCloudinary(validateFile.image);
    const newImagePublicId = getCloudinaryImagePublicId(imageUrl);
    cloudinary.uploader.destroy(oldImagePublicId);

    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        image: imageUrl,
        imagePublicId: newImagePublicId,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);

    return { message: "Product Updated Successfully." };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    return { message: "Unkown Error Occured." };
  }
}
