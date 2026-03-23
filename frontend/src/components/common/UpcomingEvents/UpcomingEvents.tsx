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

    const [selected, setSelected] = useState<UpcomingEventItem | null>( null );

    return (
        <Box py={ 80 } bg="#f4e8df">
            <Container size="xl">
                <Title ta="center" c="#c84c5c" fw={ 700 }>
                    { data?.Heading }
                </Title>

                <Text ta="center" c="dimmed" mb={ 50 }>
                    { data?.Subheading }
                </Text>

                <Grid gutter={ 40 }>
                    {/* LEFT */ }
                    <Grid.Col span={ { base: 12, md: 6 } }>
                        <TimelineList
                            events={ events }
                            selected={ selected }
                            onSelect={ setSelected }
                        />
                    </Grid.Col>

                    {/* RIGHT */ }
                    <Grid.Col span={ { base: 12, md: 6 } }>
                        <EventDetails event={ selected } />
                    </Grid.Col>
                </Grid>

            </Container>
        </Box>
    );
}