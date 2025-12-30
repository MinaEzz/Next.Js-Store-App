"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

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
  prevState: any,
  formData: FormData
): Promise<{ message: string }> {
  return {
    message: "Product Created Successfully",
  };
}
