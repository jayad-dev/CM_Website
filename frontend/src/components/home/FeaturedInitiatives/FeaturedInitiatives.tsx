
"use client";
import { Container, SimpleGrid, Stack, Title, Text, Box } from "@mantine/core";
import InitiativeCard from "./InitiativeCard";
import { FeaturedInitiativeData } from "@/types/strapi";

interface Props {
  data: FeaturedInitiativeData;
}

export default function FeaturedInitiatives( { data }: Props ) {
  if ( !data ) return null;

  const gridItems = [
    data.imageGrid1,
    data.imageGrid2,
    data.imageGrid3,
    data.imageGrid4,
    data.imageGrid5,
    data.imageGrid6,
  ].filter( Boolean );



  return (
    <Box bg="#FDF1F4" py={ 60 }>
      <Container size="xl">
        <Stack align="center" gap="xs" mb={ 40 }>
          <Title order={ 2 } c="#9B1C2E">
            { data.Heading }
          </Title>

          <Text c="#555" ta="center" maw={ 600 }>
            { data?.subheading }
          </Text>
        </Stack>

        <SimpleGrid cols={ { base: 1, sm: 2, md: 3 } } spacing="lg">
          { gridItems.map( ( item, index ) => (
            <InitiativeCard key={ index } item={ item! } />
          ) ) }
        </SimpleGrid>
      </Container>
    </Box>
  );
}