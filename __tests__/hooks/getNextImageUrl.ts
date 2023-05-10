import { URL } from "url";

export function getNextImageUrl(nextJsUrl: string): string {
  const { searchParams } = new URL(nextJsUrl, "http://localhost");
  const imageUrl = searchParams.get("url");

  return imageUrl || "";
}
