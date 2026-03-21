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
            py={ 80 }
            w="100%"
            style={ {
                background:
                    "radial-gradient(circle at center, #4b3f72 0%, #1a1b2e 70%)",
            } }
            my={ 40 }
        >
            <Container size={ 1220 } pos="relative">

                <Title
                    ta="center"
                    mb={ 50 }
                    c="#f4b860"
                    fw={ 700 }
                    style={ {
                        fontFamily: "Philosopher, serif",
                        fontSize: 48,
                    } }
                >
                    { data?.Heading }
                </Title>

                <Box pos="relative">

                    <Flex
                        pos="absolute"
                        left={ -70 }
                        top="50%"
                        w={ 56 }
                        h={ 56 }
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
                        <IconChevronLeft color="white" />
                    </Flex>

                    <Flex
                        pos="absolute"
                        right={ -70 }
                        top="50%"
                        w={ 56 }
                        h={ 56 }
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
                        <IconChevronRight color="white" />
                    </Flex>

                    <Carousel
                        getEmblaApi={ ( api: EmblaCarouselType ) => {
                            carouselRef.current = api;
                            api.on( "select", () => {
                                const index = api.selectedScrollSnap();
                                setActiveGroup( Math.floor( index / 3 ) );
                            } );
                        } }
                        slideSize="395px"
                        slideGap="md"
                        align="start"
                        slidesToScroll={ 3 }
                        containScroll="keepSnaps"
                        withControls={ false }
                    >
                        { images.map( ( img: string, index: number ) => (
                            <Carousel.Slide
                                key={ index }
                                style={ { flex: "0 0 auto" } }
                            >
                                <Paper
                                    radius={ 12 }
                                    w={ 395 }
                                    h={ 445 }
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

                <Flex justify="center" mt={ 30 } gap={ 6 }>
                    { images.map( ( _, index ) => (
                        <Box
                            key={ index }
                            w={ activeGroup === Math.floor( index / 3 ) ? 28 : 12 }
                            h={ 4 }
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