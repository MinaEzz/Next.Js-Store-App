import cloudinary from "@/lib/cloudinary";

export async function uploadImageToCloudinary(
  file: File,
  folder = "next-store-app",
): Promise<string> {
  if (!file || file.size === 0) {
    throw new Error("No image file provided");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (error, result) => {
          if (error || !result) {
            reject(new Error("Image upload failed"));
            return;
          }
          resolve(result.secure_url);
        },
      )
      .end(buffer);
  });
}
