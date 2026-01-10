import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  company: z.string(),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "Price must be at least 0" }),
  description: z.string().refine(
    (desc) => {
      const wordCount = desc.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "Description must be between 10 and 1000 words",
    }
  ),
  featured: z.coerce.boolean(),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1 * 1024 * 1024; // 1MB
  const acceptedFileTypes = ["image/"];

  return z
    .instanceof(File)
    .refine(
      (file) => {
        return !file || file.size <= maxUploadSize;
      },
      {
        message: "File size must be less than 1MB",
      }
    )
    .refine(
      (file) => {
        return (
          !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
        );
      },
      {
        message: "File type must be image",
      }
    );
}

export function validateSchema<T>(schema: z.ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.issues.map((issue) => issue.message);
    throw new Error(errors.join(", "));
  }
  return result.data as T;
}
