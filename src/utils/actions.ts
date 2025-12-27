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
