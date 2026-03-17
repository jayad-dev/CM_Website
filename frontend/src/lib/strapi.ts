/* eslint-disable @typescript-eslint/no-explicit-any */

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchStrapiData(path: string) {
  const url = new URL(`/api${path}`, STRAPI_URL);

  try {
    const response = await fetch(url.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Strapi Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Strapi Fetch Error:", error);
    return null;
  }
}

/* ---------------- SINGLE MEDIA ---------------- */

export function getStrapiMedia(url: string | null) {
  if (!url) return null;

  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  return `${STRAPI_URL}${url}`;
}

export function getMediaUrl(media: any): string | null {
  if (!media) {
    console.log("getMediaUrl: media is null/undefined");
    return null;
  }

  console.log("getMediaUrl input:", JSON.stringify(media, null, 2));

  if (media.data && !Array.isArray(media.data)) {
    const url = media.data.attributes?.url || media.data.url;
    if (url) {
      const fullUrl = getStrapiMedia(url);
      console.log("getMediaUrl found (v4 data):", fullUrl);
      return fullUrl;
    }
  }

  if (media.attributes?.url) {
    const fullUrl = getStrapiMedia(media.attributes.url);
    console.log("getMediaUrl found (v5 attributes):", fullUrl);
    return fullUrl;
  }

  if (media.url) {
    const fullUrl = getStrapiMedia(media.url);
    console.log("getMediaUrl found (direct url):", fullUrl);
    return fullUrl;
  }

  console.log("getMediaUrl: No URL found in media object");
  return null;
}

/* ---------------- MULTIPLE MEDIA ---------------- */

export function getMediaUrls(media: any): string[] {
  if (!media) {
    console.log("getMediaUrls: media is null/undefined");
    return [];
  }

  console.log("getMediaUrls input:", JSON.stringify(media, null, 2));

  const isString = (value: string | null): value is string => {
    return typeof value === "string";
  };
  if (media.data && Array.isArray(media.data)) {
    const urls = media.data
      .map((item: any) => {
        const url = item.attributes?.url || item.url;
        return getStrapiMedia(url);
      })
      .filter(isString);
    console.log("getMediaUrls found (v4 data array):", urls);
    return urls;
  }
  if (Array.isArray(media)) {
    const urls = media
      .map((item: any) => {
        const url = item.attributes?.url || item.url;
        return getStrapiMedia(url);
      })
      .filter(isString);
    console.log("getMediaUrls found (array):", urls);
    return urls;
  }
  if (media.url) {
    const url = getStrapiMedia(media.url);
    console.log("getMediaUrls found (single object):", url);
    return url ? [url] : [];
  }

  console.log("getMediaUrls: No array structure found");
  return [];
}
/* ---------------- RICH TEXT BLOCK ---------------- */

export function renderBlockText(blocks: any[]) {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block.type === "paragraph" || !block.type) {
        return block.children?.map((child: any) => child.text).join("") || "";
      }
      return "";
    })
    .join("\n\n");
}
