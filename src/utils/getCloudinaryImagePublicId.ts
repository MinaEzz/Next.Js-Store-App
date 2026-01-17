export function getCloudinaryImagePublicId(url: string): string {
  const parts = url.split("/");
  const uploadIndex = parts.findIndex((p) => p === "upload");

  const publicIdWithExtension = parts
    .slice(uploadIndex + 1)
    .join("/")
    .replace(/^v\d+\//, "");

  return publicIdWithExtension.replace(/\.[^/.]+$/, "");
}
