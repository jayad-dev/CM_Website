"use client";

import {
  Container,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Box,
} from "@mantine/core";
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
          <Title
            order={ 2 }
            ta="center"
            c="#9B1C2E"
            ff="Philosopher"
            fw={ 700 }
            fz={ { base: 28, sm: 36, md: 48 } }
            lh="100%"
          >
            { data.Heading }
          </Title>

          <Text
            ta="center"
            maw={ 600 }
            c="#555"
            ff="Lexend"
            fw={ 400 }
            fz={ { base: 14, sm: 16, md: 20 } }
            style={ { whiteSpace: "nowrap" } }
            lh="28px">
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