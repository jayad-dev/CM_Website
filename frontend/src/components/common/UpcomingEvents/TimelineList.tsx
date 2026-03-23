
"use client";

import { Box, Stack } from "@mantine/core";
import { UpcomingEventItem } from "@/types/strapi";
import EventCard from "./EventCard";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";

interface Props {
    events: UpcomingEventItem[];
    selected: UpcomingEventItem | null;
    onSelect: ( event: UpcomingEventItem ) => void;
}

export default function TimelineList( {
    events,
    selected,
    onSelect,
}: Props ) {
    return (
        <Stack gap="xl" pos="relative">

            <Box
                pos="absolute"
                left={ 32 }
                top={ 0 }
                bottom={ 0 }
                w={ 2 }
                style={ {
                    background:
                        "linear-gradient(180deg, #ff8a00 0%, #7b61ff 100%)",
                } }
            />

            { events.map( ( item ) => {
                const iconUrl = getStrapiMedia( item.Icon?.url ) || "";


                return (
                    <Box key={ item.id } pos="relative" pl={ 90 }>
                        <Box
                            pos="absolute"
                            left={ 4 }
                            top={ 0 }
                            style={ {
                                borderRadius: 16,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            } }
                        >
                            { iconUrl && (
                                <Image
                                    src={ iconUrl }
                                    alt={ item.Title || "icon" }
                                    width={ 55 }
                                    height={ 55 }
                                    style={ { objectFit: "contain" } }
                                    unoptimized
                                />
                            ) }
                        </Box>
                        <EventCard
                            item={ item }
                            active={ selected?.id === item.id }
                            onClick={ () => onSelect( item ) }
                        />
                    </Box>
                );
            } ) }
        </Stack>
    );
}