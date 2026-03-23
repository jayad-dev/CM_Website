
"use client";
import "@mantine/carousel/styles.css";
import {
    Box,
    Container,
    Title,
    Image,
    Paper,
    Flex,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { FeaturedImagesData } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";

interface Props {
    data: FeaturedImagesData | null;
}

export default function FeaturedEvents( { data }: Props ) {
    const images: string[] =
        data?.images?.flatMap( ( item ) =>
            getMediaUrls( item.carouselImages )
        ) || [];

    const carouselRef = useRef<EmblaCarouselType | null>( null );
    const [activeGroup, setActiveGroup] = useState<number>( 0 );

    return (
        <Box
            py={ 50 }
            w="100%"
            my={ 30 }
            style={ {
                background:
                    "radial-gradient(circle at center, #4b3f72 0%, #1a1b2e 70%)",
            } }
        >
            <Container size={ 960 } pos="relative">

                <Title
                    ta="center"
                    mb={ 30 }
                    c="#f4b860"
                    fw={ 700 }
                    style={ {
                        fontFamily: "Philosopher, serif",
                        fontSize: 36,
                    } }
                >
                    { data?.Heading }
                </Title>

                <Box pos="relative">

                    <Flex
                        pos="absolute"
                        left={ -100 }
                        top="50%"
                        w={ 44 }
                        h={ 44 }
                        justify="center"
                        align="center"
                        bd="1px solid rgba(255,255,255,0.4)"
                        bg="rgba(255,255,255,0.1)"
                        style={ {
                            transform: "translateY(-50%)",
                            borderRadius: "50%",
                            backdropFilter: "blur(6px)",
                            cursor: "pointer",
                            zIndex: 2,
                        } }
                        onClick={ () => carouselRef.current?.scrollPrev() }
                    >
                        <IconChevronLeft size={ 18 } color="white" />
                    </Flex>

                    <Flex
                        pos="absolute"
                        right={ -100 }
                        top="50%"
                        w={ 44 }
                        h={ 44 }
                        justify="center"
                        align="center"
                        bd="1px solid rgba(255,255,255,0.4)"
                        bg="rgba(255,255,255,0.1)"
                        style={ {
                            transform: "translateY(-50%)",
                            borderRadius: "50%",
                            backdropFilter: "blur(6px)",
                            cursor: "pointer",
                            zIndex: 2,
                        } }
                        onClick={ () => carouselRef.current?.scrollNext() }
                    >
                        <IconChevronRight size={ 18 } color="white" />
                    </Flex>

                    <Carousel
                        getEmblaApi={ ( api: EmblaCarouselType ) => {
                            carouselRef.current = api;
                            api.on( "select", () => {
                                const index = api.selectedScrollSnap();
                                setActiveGroup( Math.floor( index / 3 ) );
                            } );
                        } }
                        slideSize="300px"
                        slideGap="md"
                        align="start"
                        slidesToScroll={ 3 }
                        containScroll="keepSnaps"
                        withControls={ false }
                    >
                        { images.map( ( img, index ) => (
                            <Carousel.Slide
                                key={ index }
                                style={ { flex: "0 0 auto" } }
                            >
                                <Paper
                                    radius="md"
                                    w={ 300 }
                                    h={ 340 }
                                    style={ { overflow: "hidden" } }
                                >
                                    <Image
                                        src={ img }
                                        alt={ `event-${index}` }
                                        h="100%"
                                        fit="cover"
                                    />
                                </Paper>
                            </Carousel.Slide>
                        ) ) }
                    </Carousel>
                </Box>

                <Flex justify="center" mt={ 20 } gap={ 5 }>
                    { images.map( ( _, index ) => (
                        <Box
                            key={ index }
                            w={ activeGroup === Math.floor( index / 3 ) ? 22 : 10 }
                            h={ 3 }
                            bg={
                                activeGroup === Math.floor( index / 3 )
                                    ? "white"
                                    : "rgba(255,255,255,0.4)"
                            }
                            style={ {
                                borderRadius: 4,
                                transition: "all 0.3s ease",
                            } }
                        />
                    ) ) }
                </Flex>
            </Container>
        </Box>
    );
}