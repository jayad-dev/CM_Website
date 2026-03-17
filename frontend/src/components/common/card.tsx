"use client";

import { Card, Text, Box, Image, Stack } from "@mantine/core";
import { HomePageCardBlock } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";

interface Props {
  card: HomePageCardBlock;
}
export default function SeekerCard({ card }: Props) {
  const imageUrls = card.image ? getMediaUrls(card.image) : [];
  const imageUrl = imageUrls?.[0];

  return (
    <Card
      radius={16}
      shadow="sm"
      withBorder
      p={0}
      w={320}
      h={420}
    >
      <Image
        src={imageUrl || "/assets/image/placeholder.png"}
        alt={card.Heading}
        h={180}
        fit="cover"
      />
      <Stack h="100%" p={20} gap="xs">
        <Box>
          <Text fw={600} fz={18} mb={6} c="#F97316">
            {card.Heading}
          </Text>
          <Text fz={14} lh={1.6} c="#6B7280">
            {card.description}
          </Text>
        </Box>
        <Text mt="auto" fw={500} fz={14} c="#E63946">
          {card.LinkText} →
        </Text>
      </Stack>
    </Card>
  );
}