"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getAuthUser } from "./getAuthUser";

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
  formData: FormData
): Promise<{ message: string }> {
  const user = await getAuthUser();
  try {
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const price = Number(formData.get("price"));
    const image = formData.get("image") as File;
    const description = formData.get("description") as string;
    const featured = Boolean(formData.get("featured") as string);
    console.log({ name, company, price, image, description, featured });
    // send the file to upload function that return the url then send the url to prisma and create the product

    await prisma.product.create({
      data: {
        name,
        company,
        price,
        image:
          "https://images.pexels.com/photos/269480/pexels-photo-269480.jpeg",
        description,
        featured: featured,
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
