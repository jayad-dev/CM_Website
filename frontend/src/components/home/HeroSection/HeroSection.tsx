
"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Badge,
  Grid,
  GridCol,
  Image,
  Stack,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { HomePageBannerData } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface HeroSectionProps {
  bannerData: HomePageBannerData | null;
}

export default function HeroSection({ bannerData }: HeroSectionProps) {
  const bannerImages = bannerData?.banner
    ? getMediaUrls(bannerData.banner)
    : [];

  const bannerImage = bannerImages?.[0];

  const badgeText =
    bannerData?.Heading ||
    "Celebrating 75 Years of Spiritual Excellence";

  const heroHeading =
    bannerData?.subheading ||
    "Timeless Hindu Wisdom, Made Clear.";
    const words = heroHeading.split(" ");
    const firstWord = words[0];      
    const secondWord = words[1]; 
    const restText = words.slice(2).join(" ");

  const description =
    bannerData?.aboutText ||
    "Chinmaya Mission UK offers a wide range of study forums and activities.";

  const buttonText =
    bannerData?.buttonText || "Start Discovering";

  return (
    <Box
      py={{ base: 60, md: 100 }}
      style={{
        background: "#F6F4F3",
      }}
    >
      <Container size="xl">
        <Grid align="center" gutter={60}>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap={24}>
                <Badge
                radius="xl"
                px={16}
                py={6}
                w="fit-content"
                style={{
                  background: "#F5E2C8",
                  color: "#D97706",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {badgeText}
              </Badge>

              <Title
  order={1}
  className={philosopher.className}
  style={{
    fontWeight: 700,
    fontSize: "clamp(40px, 5vw, 72px)",
    lineHeight: "1.1",
    letterSpacing: "-1.8px",
    color: "#4B4B4B",
    maxWidth: "640px",
  }}
>
  <span
    style={{
      background:
        "linear-gradient(99.12deg, #C62B35 -15.03%, #EF7F25 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    {firstWord}
  </span>{" "}
  {secondWord}
  <br />
  {restText}
</Title>

              <Text
                style={{
                  fontSize: 16,
                  color: "#666",
                  maxWidth: 520,
                  lineHeight: 1.7,
                }}
              >
                {description}
              </Text>

              <Link href="/discover" style={{ width: "fit-content" }}>
                <Button
                  radius="md"
                  h={44}
                  px={26}
                  rightSection={<IconArrowRight size={18} />}
                  style={{
                    background: "#BA324F",
                    fontWeight: 500,
                  }}
                >
                  {buttonText}
                </Button>
              </Link>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Box
              style={{
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {bannerImage ? (
                <Image
                  src={bannerImage}
                  alt={heroHeading}
                  radius="lg"
                  h={420}
                  fit="cover"
                />
              ) : (
                <Box
                  h={420}
                  style={{
                    background: "#eee",
                    borderRadius: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text c="dimmed">No image available</Text>
                </Box>
              )}
            </Box>
          </GridCol>

        </Grid>
      </Container>
    </Box>
  );
}