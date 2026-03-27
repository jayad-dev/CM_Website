"use client";

import { Box, Container, Title, Text, Grid } from "@mantine/core";
import { useState } from "react";
import { UpcomingEventsData, UpcomingEventItem } from "@/types/strapi";
import TimelineList from "./TimelineList";
import EventDetails from "./EventDetails";
import styles from "./UpcomingEvents.module.css";

interface Props {
    data: UpcomingEventsData | null;
}

export default function UpcomingEvents( { data }: Props ) {
    const events = data?.EventItems || [];

    const [selected, setSelected] = useState<UpcomingEventItem | null>(
        events[0] || null
    );

    return (
        <Box w="100%">
            <Box
                pt={ 100 }
                pb={ 180 }
                w="100%"
                style={ {
                    backgroundColor: "#FECFBE52",
                    clipPath: "ellipse(100% 100% at 50% 0%)",
                    zIndex: 1,
                } }
            >
                <Container
                    size={ 1526 }
                    px={ 0 }
                    style={ {
                        maxWidth: "1526px",
                    } }
                >
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
                        <Grid.Col span={ { base: 12, md: 6 } }>
                            <Box
                                h={ 700 }
                                pr={ 10 }
                                className={ styles.scrollArea }
                            >
                                <TimelineList
                                    events={ events }
                                    selected={ selected }
                                    onSelect={ setSelected }
                                />
                            </Box>
                        </Grid.Col>
                        <Grid.Col span={ { base: 12, md: 6 } }>
                            <Box pos="sticky" top={ 120 }>
                                <EventDetails event={ selected } />
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}