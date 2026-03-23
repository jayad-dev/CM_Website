
"use client";

import { Paper, Text, Badge, Group, Stack } from "@mantine/core";
import {
    IconClock,
    IconMapPin,
    IconUsers,
} from "@tabler/icons-react";
import { UpcomingEventItem } from "@/types/strapi";

interface Props {
    item: UpcomingEventItem;
    active: boolean;
    onClick: () => void;
}

const labelColors: Record<string, string> = {
    Workshop: "linear-gradient(90deg, #2B7FFF 0%, #615FFF 100%)",
    Satsang: "linear-gradient(90deg, #F6339A 0%, #FF2056 100%)",
    Retreat: "linear-gradient(90deg, #AD46FF 0%, #8E51FF 100%)",
    Meditation: "linear-gradient(90deg, #00C950 0%, #00BC7D 100%)",
    Service: "linear-gradient(90deg, #FF6900 0%, #FB2C36 100%)",
};

const formatLabel = ( text?: string ) => {
    if ( !text ) return "";
    return text.charAt( 0 ).toUpperCase() + text.slice( 1 ).toLowerCase();
};

export default function EventCard( {
    item,
    active,
    onClick,
}: Props ) {
    const gradient =
        labelColors[item.Label || ""] ||
        "linear-gradient(90deg, #2B7FFF, #615FFF)";

    return (
        <Paper
            p="md"
            radius={ 16 }
            withBorder
            onClick={ onClick }
            style={ {
                cursor: "pointer",
                background: active ? "#fff7ed" : "#ffffff",
                border: active ? "2px solid #f4b860" : "1px solid #eee",
                width: 512,
                minHeight: 190,
            } }
        >
            <Stack gap={ 6 }>
                <Group justify="space-between">
                    <Text
                        size="xs"
                        c="dimmed"
                        style={ { fontFamily: "Lexend" } }
                    >
                        { item.DateText }
                    </Text>
                    <Badge
                        radius="xl"
                        px={ 12 }
                        py={ 4 }
                        style={ {
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: gradient,
                            color: "#fff",
                            fontSize: 12,
                            fontWeight: 500,
                            textTransform: "none",
                        } }
                    >
                        { formatLabel( item.Label ) }
                    </Badge>
                </Group>

                <Text
                    style={ {
                        fontFamily: "Philosopher",
                        fontWeight: 700,
                        fontSize: 24,
                        color: "#ff7a00",
                    } }
                >
                    { item.Title }
                </Text>

                <Stack gap={ 4 } mt={ 4 }>
                    <Group gap={ 6 }>
                        <IconClock size={ 16 } color="#6b7280" />
                        <Text size="sm">{ item.Time }</Text>
                    </Group>

                    <Group gap={ 6 }>
                        <IconMapPin size={ 16 } color="#6b7280" />
                        <Text size="sm">{ item.Location }</Text>
                    </Group>

                    <Group gap={ 6 }>
                        <IconUsers size={ 16 } color="#6b7280" />
                        <Text size="xs" c="dimmed">
                            { item.Capacity }
                        </Text>
                    </Group>
                </Stack>
            </Stack>
        </Paper>
    );
}