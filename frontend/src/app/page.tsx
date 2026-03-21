
import { getHomePageBanner, getHomePageCards, getFeaturedInitiatives, getFeaturedImages } from "@/services/fetcher";
import StripBanner from "@/components/home/StripBanner";
import HeroSection from "@/components/home/HeroSection";
import HomePageCards from "@/components/home/HomePageCard/HomePageCards";
import FeaturedInitiatives from "@/components/home/FeaturedInitiatives/FeaturedInitiatives";
import FeaturedEvents from "@/components/home/FeaturedInitiatives/FeaturedImage";

export default async function Home() {
  const bannerData = await getHomePageBanner();
  const cardsData = await getHomePageCards();
  const featuredData = await getFeaturedInitiatives();
  const featuredImages = await getFeaturedImages()
  console.log( featuredImages, 'featuredImages' );
  const stripBannerData = bannerData?.stripBanner || null;

  return (
    <>
      <HeroSection bannerData={ bannerData } />
      <StripBanner data={ stripBannerData } />
      <HomePageCards data={ cardsData } />
      <FeaturedInitiatives data={ featuredData } />
      <FeaturedEvents data={ featuredImages } />

    </>
  );
}