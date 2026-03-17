"use client";

import { Box, Text, Image } from "@mantine/core";
import { FeaturedInitiativeBlock } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";

interface Props {
  item: FeaturedInitiativeBlock;
}

export default function InitiativeCard({ item }: Props) {
  const imageUrls = item.image ? getMediaUrls(item.image) : [];
  const imageUrl = imageUrls?.[0];

  return (
    <Box
      pos="relative"
      h={280}
      w="100%"
      style={{
        overflow: "hidden",
        borderRadius: 16,
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <Image
        src={imageUrl || "/assets/image/placeholder.png"}
        alt={item.Heading}
        h="100%"
        w="100%"
        fit="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <Box
        pos="absolute"
        bottom={0}
        left={0}
        right={0}
        p="lg"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      >
        <Text c="white" fw={600} fz={{ base: "md", md: "lg" }} lh={1.3}>
          {item.Heading}
        </Text>

        <Text c="rgba(255,255,255,0.9)" fz={{ base: "xs", md: "sm" }} lh={1.5} mt={4}>
          {item.description}
        </Text>
      </Box>
    </Box>
  );
}
