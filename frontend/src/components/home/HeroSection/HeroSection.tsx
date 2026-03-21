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
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { HomePageBannerData } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher( {
  subsets: ["latin"],
  weight: ["400", "700"],
} );

interface HeroSectionProps {
  bannerData: HomePageBannerData | null;
}

export default function HeroSection( { bannerData }: HeroSectionProps ) {
  const autoplay = useRef(
    Autoplay( {
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    } )
  );

  const carouselImages =
    bannerData?.bannerImages?.[0]?.carouselImages?.map( ( item ) =>
      getMediaUrls( item )?.[0]
    ) || [];

  const heading =
    bannerData?.subheading ||
    "Timeless Hindu Wisdom, Made Clear.";

  const words = heading.split( " " );

  return (
    <Box bg="#F6F4F3" py={ { base: 60, md: 100 } }>
      <Container size="xl">
        <Grid align="center" gutter={ 60 }>
          <GridCol span={ { base: 12, md: 6 } }>
            <Stack gap={ 24 }>
              <Badge
                radius="xl"
                px={ 16 }
                py={ 6 }
                w="fit-content"
                styles={ {
                  root: {
                    background: "#F5E2C8",
                    color: "#D97706",
                  },
                } }
              >
                { bannerData?.Heading ||
                  "Celebrating 75 Years of Spiritual Excellence" }
              </Badge>

              <Title
                order={ 1 }
                className={ philosopher.className }
                styles={ {
                  root: {
                    fontSize: "clamp(40px, 5vw, 72px)",
                    lineHeight: 1.1,
                    color: "#4B4B4B",
                  },
                } }
              >
                <span
                  style={ {
                    background:
                      "linear-gradient(99deg, #C62B35, #EF7F25)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  } }
                >
                  { words[0] }
                </span>{ " " }
                { words[1] }
                <br />
                { words.slice( 2 ).join( " " ) }
              </Title>

              <Text c="gray.6" maw={ 520 } lh={ 1.7 } fz={ 16 }>
                { bannerData?.aboutText }
              </Text>

              <Link href="/discover">
                <Button
                  radius="md"
                  h={ 44 }
                  px={ 26 }
                  rightSection={ <IconArrowRight size={ 18 } /> }
                  styles={ {
                    root: {
                      background: "#BA324F",
                    },
                  } }
                >
                  { bannerData?.buttonText || "Start Discovering" }
                </Button>
              </Link>
            </Stack>
          </GridCol>

          <GridCol span={ { base: 12, md: 6 } }>
            <Box
              style={ {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              } }
            >
              <Box
                style={ {
                  width: 440,
                  height: 440,
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                } }
              >
                { carouselImages.length > 0 ? (
                  <Carousel
                    withIndicators
                    withControls={ false }
                    loop
                    slideSize="100%"
                    slideGap={ 0 }
                    align="start"
                    height={ 440 }
                    plugins={ [autoplay.current] }
                    classNames={ {
                      indicator: "custom-indicator",
                    } }
                    styles={ {
                      viewport: {
                        overflow: "hidden",
                      },
                      container: {
                        display: "flex",
                      },
                      slide: {
                        flex: "0 0 100%",
                      },

                      indicators: {
                        position: "absolute",
                        bottom: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 8,
                      },

                      indicator: {
                        width: 12,
                        height: 12,
                        transform: "rotate(45deg)",
                        borderRadius: 2,
                        background: "#DEDEDE54",
                        transition: "all 0.3s ease",
                      },
                    } }
                  >
                    { carouselImages.map( ( img, index ) => (
                      <Carousel.Slide key={ index }>
                        <Box
                          style={ {
                            width: 440,
                            height: 440,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#f5f5f5",
                          } }
                        >
                          <Image
                            src={ img }
                            alt={ `banner-${index}` }
                            width={ 440 }
                            height={ 440 }
                            // width={ 380 }
                            // height={ 380 }
                            fit="contain"
                          />
                        </Box>
                      </Carousel.Slide>
                    ) ) }
                  </Carousel>
                ) : (
                  <Box
                    style={ {
                      width: 440,
                      height: 440,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#eee",
                    } }
                  >
                    <Text c="dimmed">No image available</Text>
                  </Box>
                ) }
              </Box>
            </Box>
          </GridCol>
        </Grid>
      </Container>
    </Box>
  );
}