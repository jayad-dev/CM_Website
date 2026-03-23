import { Paper, Text, Badge, Group, Stack } from "@mantine/core";
import { UpcomingEventItem } from "@/types/strapi";

interface Props {
    item: UpcomingEventItem;
    active: boolean;
    onClick: () => void;
}

export default function EventCard( { item, active, onClick }: Props ) {
    return (
        <Paper
            p="md"
            radius="lg"
            withBorder
            onClick={ onClick }
            style={ {
                cursor: "pointer",
                background: active ? "#fff7ed" : "#ffffff",
                border: active ? "2px solid #f4b860" : "1px solid #eee",
            } }
        >
            <Stack gap={ 4 }>
                <Group justify="space-between">
                    <Text size="xs" c="dimmed">
                        { item.DateText }
                    </Text>

                    <Badge color="blue" radius="xl">
                        { item.Label }
                    </Badge>
                </Group>

                <Text fw={ 600 } c="#ff7a00">
                    { item.Title }
                </Text>

                <Text size="sm">⏰ { item.Time }</Text>
                <Text size="sm">📍 { item.Location }</Text>
                <Text size="xs" c="dimmed">
                    👥 { item.Capacity }
                </Text>
            </Stack>
        </Paper>
    );
}