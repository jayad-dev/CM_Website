"use client";

import { Container, Title, Text, Stack, Box } from "@mantine/core";
import { HomePageCardData, HomePageCardBlock } from "@/types/strapi";
import CardGrid from "@/components/common/cardGrid";
import SeekerCard from "@/components/common/card";

interface Props {
  data: HomePageCardData;
}

export default function HomePageCards( { data }: Props ) {
  if ( !data ) return null;

  const blocks: HomePageCardBlock[] = [
    data.Block1,
    data.Block2,
    data.Block3,
    data.Block4,
  ].filter( Boolean ) as HomePageCardBlock[];

  return (
    <Box py={ 80 } bg="#F9F9F9">
      <Container size="xl">
        <Stack align="center" mb={ 50 } gap={ 6 }>
          <Title
            order={ 2 }
            ta="center"
            c="#BA324F"
            ff="Philosopher"
            fw={ 700 }
            fz={ { base: 28, sm: 36, md: 48 } }
            lh="100%"
          >
            { data.Heading }
          </Title>

          <Text
            ta="center"
            c="#6B7280"
            ff="Lexend"
            fw={ 400 }
            fz={ { base: 14, sm: 16, md: 20 } }
            lh="28px"
            maw={ 600 }
          >
            { data.Subheading }
          </Text>

        </Stack>

        <CardGrid>
          { blocks.map( ( block, index ) => (
            <SeekerCard key={ index } card={ block } />
          ) ) }
        </CardGrid>
      </Container>
    </Box>
  );
}