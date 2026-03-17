
"use client";

import { Container, Title, Text, Stack, Box } from "@mantine/core";
import { HomePageCardData, HomePageCardBlock } from "@/types/strapi";
import CardGrid from "@/components/common/cardGrid";
import SeekerCard from "@/components/common/card";

interface Props {
  data: HomePageCardData;
}

export default function HomePageCards({ data }: Props) {
  if (!data) return null;

  const blocks: HomePageCardBlock[] = [
    data.Block1,
    data.Block2,
    data.Block3,
    data.Block4,
  ].filter(Boolean) as HomePageCardBlock[];

  return (
    <Box py={80} bg="#F9F9F9">
      <Container size="xl">
        <Stack align="center" mb={50} gap={6}>
          <Title order={2} fw={600} c="#B12A2A" ff="serif">
            {data.Heading}
          </Title>

          <Text size="md" c="#6B7280">
            {data.Subheading}
          </Text>
        </Stack>

        <CardGrid>
          {blocks.map((block, index) => (
            <SeekerCard key={index} card={block} />
          ))}
        </CardGrid>
      </Container>
    </Box>
  );
}