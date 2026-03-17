
"use client";
import { Container, Button, Text, Image, Box, Flex } from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react";
import Link from "next/link";
import { StripBannerData } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";

interface StripBannerProps {
  data: StripBannerData | null;
}

export default function StripBanner({ data }: StripBannerProps) {
  const bannerImages = data?.image ? getMediaUrls(data.image) : [];
  const bannerImage = bannerImages?.[0];

  const heading = data?.Heading || "of Chinmaya Mission";
  const subheading =
    data?.Subheading ||
    "To celebrate 75 years of Chinmaya Mission, this year-long journey across the UK and Europe brings special events and partnerships with Hindu organisations, celebrating Gurudev's vision and the path ahead.";
  const buttonText = data?.EventButton || "View CM75 events";

  return (
    <Box
      py={18}
      style={{
        background:
          "linear-gradient(90deg, #E89117 0%, #FDA949 50%, #E89117 100%)",
      }}
    >
      <Container size="xl">
        <Flex
          align="center"
          gap={24}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Flex align="center" gap={18} style={{ flex: 1 }}>
              <Box
              w={90}
              h={90}
              style={{
                background: "white",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Image
                src={bannerImage || "/assets/image/cm75-logo.svg"}
                alt="CM75 Logo"
                w={60}
                h={60}
                fit="contain"
              />
            </Box>
            <Box>
              <Text c="white" fw={600} fz={{ base: 18, md: 22 }} lh={1.3}>
                {heading}
              </Text>

              <Text
                c="rgba(255,255,255,0.95)"
                fz={{ base: 12, md: 14 }}
                lh={1.6}
              >
                {subheading}
              </Text>
            </Box>
          </Flex>

          <Box w={{ base: "100%", md: "auto" }}>
            <Link href="/cm75-events">
              <Button
                radius="md"
                h={42}
                px={20}
                rightSection={<IconCalendarEvent size={16} />}
                style={{
                  background: "white",
                  color: "#D65F0E",
                  fontWeight: 500,
                }}
                fullWidth
              >
                {buttonText}
              </Button>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}