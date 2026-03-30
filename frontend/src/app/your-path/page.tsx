import HeroSection from "@/components/common/HeroSection/HeroSection";
import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { getYourPathPage, getHomePageCards } from "@/services/fetcher";
import { getStrapiMedia } from "@/lib/strapi";
import HomePageCards from "@/components/home/HomePageCard/HomePageCards";

export default async function YourPathPage() {
    const page = await getYourPathPage();
    const hero = page?.PageContent?.find( ( c ) => c.__component?.includes( "shared.hero" ) );
    const cardsData = await getHomePageCards();
    // console.log( "cardsData", cardsData )

    const heroData = hero && {
        Title: hero.Title,
        Description: hero.Description,
        BackgroundImage: {
            url:
                ( hero?.BackgroundImage?.data?.attributes?.url &&
                    getStrapiMedia( hero.BackgroundImage.data.attributes.url ) ) ||
                ( hero?.BackgroundImage?.url && getStrapiMedia( hero.BackgroundImage.url ) ) ||
                "",
        },
        PrimaryButton: hero.PrimaryButton
            ? { label: hero.PrimaryButton.label || "Learn more", href: hero.PrimaryButton.url || "#" }
            : undefined,
        SecondaryButton: hero.SecondaryButton
            ? { label: hero.SecondaryButton.label || "Explore", href: hero.SecondaryButton.url || "#" }
            : undefined,
    };

    return (
        <>
            { heroData && <HeroSection data={ heroData } /> }

            <Container size="lg" py={ 60 }>
                <Stack gap={ 40 }>
                    { cardsData && <HomePageCards data={ cardsData } /> }
                    <section id="register">
                        {/* <Title order={ 2 } mb={ 10 }>
                            Register Now
                        </Title>
                        <Text c="dimmed" mb={ 20 }>
                            Join us in celebrating this momentous milestone.
                        </Text>
                        <Box p="lg" bg="#f8f9fa" style={ { borderRadius: 16, border: "1px solid #eee" } }>
                            <Text>Registration form goes here…</Text>
                        </Box> */}
                    </section>

                </Stack>
            </Container>
        </>
    );
}

