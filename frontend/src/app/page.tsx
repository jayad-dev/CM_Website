import {
  FeaturedEvents,
  FeaturedInitiatives,
  HeroSection,
  HomePageCards,
  StripBanner,
  UpcomingEvents,
} from "@/components";
import LatestNews from "@/components/common/LatestNews/LatestNews";

import {
  getFeaturedImages,
  getFeaturedInitiatives,
  getHomePageBanner,
  getHomePageCards,
  getLatestNews,
  getUpcomingEvents,
} from "@/services/fetcher";

export default async function Home() {
  const bannerData = await getHomePageBanner();
  const cardsData = await getHomePageCards();
  const featuredData = await getFeaturedInitiatives();
  const featuredImages = await getFeaturedImages();
  const upcomingEvents = await getUpcomingEvents();
  const latestNews = await getLatestNews();
  const stripBannerData = bannerData?.stripBanner || null;
  console.log( "latestNews", latestNews );

  return (
    <>
      <HeroSection bannerData={ bannerData } />
      <StripBanner data={ stripBannerData } />
      <HomePageCards data={ cardsData } />
      <FeaturedInitiatives data={ featuredData } />
      <FeaturedEvents data={ featuredImages } />
      <UpcomingEvents data={ upcomingEvents } />
      <LatestNews data={ latestNews } />
    </>
  );
}