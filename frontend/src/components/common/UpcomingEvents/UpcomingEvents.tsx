
"use client";

import { Box, Container, Title, Text, Grid } from "@mantine/core";
import { useState } from "react";
import { UpcomingEventsData, UpcomingEventItem } from "@/types/strapi";
import TimelineList from "./TimelineList";
import EventDetails from "./EventDetails";

interface Props {
    data: UpcomingEventsData | null;
}

export default function UpcomingEvents( { data }: Props ) {
    const events = data?.EventItems || [];

    const [selected, setSelected] = useState<UpcomingEventItem | null>(
        events[0] || null
    );

    return (
        <Box
            py={ 100 }
            w="100%"
            bg="#F4E8DF"
        >
            <Container
                size={ 1526 }
                px={ 0 }
                style={ {
                    maxWidth: "1526px",
                } }
            >
                {/* HEADING */ }
                <Title
                    ta="center"
                    mb={ 10 }
                    style={ {
                        fontFamily: "Philosopher",
                        fontWeight: 700,
                        fontSize: "48px",
                        lineHeight: "100%",
                        color: "#C84C5C",
                    } }
                >
                    { data?.Heading }
                </Title>

                {/* SUBHEADING */ }
                <Text
                    ta="center"
                    mb={ 60 }
                    style={ {
                        fontFamily: "Lexend",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "28px",
                        color: "#5f5f5f",
                    } }
                >
                    { data?.Subheading }
                </Text>

                <Grid gutter={ 60 }>
                    {/* LEFT SCROLL */ }
                    <Grid.Col span={ { base: 12, md: 6 } }>
                        <Box
                            h={ 700 }
                            pr={ 10 }
                            style={ {
                                overflowY: "auto",
                                scrollbarWidth: "none",
                            } }
                        >
                            <style>
                                { `
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
                            </style>

                            <TimelineList
                                events={ events }
                                selected={ selected }
                                onSelect={ setSelected }
                            />
                        </Box>
                    </Grid.Col>

                    {/* RIGHT STICKY */ }
                    <Grid.Col span={ { base: 12, md: 6 } }>
                        <Box pos="sticky" top={ 120 }>
                            <EventDetails event={ selected } />
                        </Box>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
}