import { api } from "./api";
import type { MediaData } from "@/types/strapi";
import type { AxiosError } from "axios";

export async function getHeader() {
  try {
    const res = await api.get("/api/header?populate=*");
    return res.data.data;
  } catch (error) {
    console.error("Error fetching header:", error);
    return null;
  }
}

export async function getHomePageBanner() {
  try {
    const res = await api.get(
      `/api/home-page-banner?populate[bannerImages][populate][carouselImages][populate]=*&populate[stripBanner][populate]=*`
    );
    return res.data.data;
  } catch (error) {
    console.error("Error fetching home page banner:", error);
    return null;
  }
}
export async function getFeaturedImages() {
  try {
    const res = await api.get(
      "/api/featured-image?populate[images][populate][carouselImages][populate]=*&populate[backgroundImage][populate]=*"
    );
    return res.data.data;
  } catch (error) {
    console.error("Error fetching featured images:", error);
    return null;
  }
}

export async function getHomePageCards() {
  try {
    const res = await api.get(
      "/api/home-page-card?populate[Block1][populate]=*&populate[Block2][populate]=*&populate[Block3][populate]=*&populate[Block4][populate]=*"
    );

    return res.data.data;
  } catch (error) {
    console.error("Error fetching HomePageCard:", error);
    return null;
  }
}

export async function getFeaturedInitiatives() {
  try {
    const res = await api.get(
        "/api/featured-initiative?populate[imageGrid1][populate]=*&populate[imageGrid2][populate]=*&populate[imageGrid3][populate]=*&populate[imageGrid4][populate]=*&populate[imageGrid5][populate]=*&populate[imageGrid6][populate]=*&populate[imageGrid7][populate]=*"
    );

    return res.data.data;
  } catch (error) {
    console.error("Error fetching featured initiatives:", error);
    return null;
  }
}

export async function getCollection(endpoint: string) {
  try {
    const res = await api.get(`/api/${endpoint}?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

export async function getFooter() {
  try {
    const res = await api.get("/api/footer?populate=*");
    return res.data.data;
  } catch (error) {
    console.error("Error fetching footer:", error);
    return null;
  }
}
export async function getSingleItem(endpoint: string, id: string | number) {
  try {
    const res = await api.get(`/api/${endpoint}/${id}?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}/${id}:`, error);
    return null;
  }
}

export async function getUpcomingEvents() {
  try {
    const res = await api.get(
      "/api/upcomming-events?populate[EventItems][populate][Icon][populate]=*"
    );

    return res.data.data;

  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    return null;
  }
}
export async function getLatestNews() {
  try {
    const res = await api.get(
      "/api/home-page-banner?populate[LatestNews][populate][FeaturedArticle][populate][Image]=true&  [LatestNews][populate][FeaturedArticle][populate][CategoryList]=true&populate[LatestNews][populate][NewsList][populate][Image]=true&populate[LatestNews][populate][NewsList][populate][CategoryList]=true&populate[LatestNews][populate][ViewAllButton]=true"
    );
    const root = res?.data?.data;
    const attrs = root?.attributes ?? root;
    const latest = attrs?.LatestNews ?? null;
    if (!latest) return null;

    type AnyObj = Record<string, unknown>;
    const asObj = (v: unknown): AnyObj | null =>
      typeof v === "object" && v !== null ? (v as AnyObj) : null;

    const normalizeMedia = (m: unknown): MediaData | undefined => {
      // Strapi media can be object, or { data: { attributes: ... } }
      const mm = asObj(m);
      if (!mm) return undefined;
      const data = asObj(mm["data"]);
      const media =
        (data && asObj(data["attributes"])) ?? asObj(mm["attributes"]) ?? mm;
      return media as unknown as MediaData;
    };

    const normalizeCategory = (
      list: unknown
    ): { id: number; name: string; url?: string } | undefined => {
      const first = Array.isArray(list) ? (list[0] as unknown) : undefined;
      const ff = asObj(first);
      if (!ff) return undefined;
      return {
        id: typeof ff["id"] === "number" ? (ff["id"] as number) : 0,
        name:
          (typeof ff["label"] === "string" && (ff["label"] as string)) ||
          (typeof ff["name"] === "string" && (ff["name"] as string)) ||
          "",
        url: typeof ff["url"] === "string" ? (ff["url"] as string) : undefined,
      };
    };

    const normalizeCard = (card: unknown) => {
      const cc = asObj(card);
      if (!cc) return null;
      return {
        id: typeof cc["id"] === "number" ? (cc["id"] as number) : 0,
        title:
          (typeof cc["Title"] === "string" && (cc["Title"] as string)) ||
          (typeof cc["title"] === "string" && (cc["title"] as string)) ||
          "",
        description:
          (typeof cc["Description"] === "string" &&
            (cc["Description"] as string)) ||
          (typeof cc["description"] === "string" &&
            (cc["description"] as string)) ||
          "",
        date:
          (typeof cc["Date"] === "string" && (cc["Date"] as string)) ||
          (typeof cc["date"] === "string" && (cc["date"] as string)) ||
          "",
        slug:
          (typeof cc["Slug"] === "string" && (cc["Slug"] as string)) ||
          (typeof cc["slug"] === "string" && (cc["slug"] as string)) ||
          undefined,
        image: normalizeMedia(cc["Image"] ?? cc["image"]),
        category: normalizeCategory(cc["CategoryList"] ?? cc["categoryList"]),
      };
    };

    return {
      id: latest?.id ?? 0,
      Heading: latest?.Heading ?? "",
      Subheading: latest?.Subheading ?? "",
      FeaturedArticle: normalizeCard(latest?.FeaturedArticle),
      NewsList: (latest?.NewsList ?? []).map(normalizeCard).filter(Boolean),
      ViewAllButton: latest?.ViewAllButton,
    };
  } catch (error) {
    const err = error as unknown;
    const axiosErr = err as AxiosError<unknown> & { isAxiosError?: boolean };
    const isAxios = axiosErr?.isAxiosError === true;

    if (isAxios) {
      console.error("Error fetching latest news (axios):", {
        message: axiosErr.message,
        status: axiosErr.response?.status,
        data: axiosErr.response?.data,
      });
    } else {
      console.error("Error fetching latest news (non-axios):", err);
    }
    return null;
  }
}