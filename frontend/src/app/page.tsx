import {
  FeaturedEvents,
  FeaturedInitiatives,
  HeroSection,
  HomePageCards,
  StripBanner,
  UpcomingEvents,
} from "@/components";

import {
  getFeaturedImages,
  getFeaturedInitiatives,
  getHomePageBanner,
  getHomePageCards,
  getUpcomingEvents,
} from "@/services/fetcher";

export default async function Home() {
  const bannerData = await getHomePageBanner();
  const cardsData = await getHomePageCards();
  const featuredData = await getFeaturedInitiatives();
  const featuredImages = await getFeaturedImages();
  const upcomingEvents = await getUpcomingEvents();

  const stripBannerData = bannerData?.stripBanner || null;

  return (
    <>
      <HeroSection bannerData={ bannerData } />
      <StripBanner data={ stripBannerData } />
      <HomePageCards data={ cardsData } />
      <FeaturedInitiatives data={ featuredData } />
      <FeaturedEvents data={ featuredImages } />
      <UpcomingEvents data={ upcomingEvents } />
    </>
  );
}