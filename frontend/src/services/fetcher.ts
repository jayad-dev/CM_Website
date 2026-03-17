import { api } from "./api";

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
      "/api/home-page-banner?populate[banner][populate]=*&populate[stripBanner][populate]=*"
    );
    return res.data.data;
  } catch (error) {
    console.error("Error fetching home page banner:", error);
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

export async function getSingleItem(endpoint: string, id: string | number) {
  try {
    const res = await api.get(`/api/${endpoint}/${id}?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}/${id}:`, error);
    return null;
  }
}
