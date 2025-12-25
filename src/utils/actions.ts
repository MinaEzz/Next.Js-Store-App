import prisma from "@/lib/prisma";

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

export async function fetchProducts() {
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
