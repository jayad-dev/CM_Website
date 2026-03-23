import { Paper, Text, Stack, Center } from "@mantine/core";
import { UpcomingEventItem } from "@/types/strapi";
import { IconCalendar } from "@tabler/icons-react";

interface Props {
    event: UpcomingEventItem | null;
}

export default function EventDetails( { event }: Props ) {
    if ( !event ) {
        return (
            <Paper p={ 40 } radius="lg" withBorder h={ 300 }>
                <Center h="100%">
                    <Stack align="center">
                        <IconCalendar size={ 40 } color="#d6a58d" />
                        <Text c="dimmed">
                            Click on an event to view details
                        </Text>
                    </Stack>
                </Center>
            </Paper>
        );
    }

    return (
        <Paper p="lg" radius="lg" withBorder>
            <Stack>
                <Text fw={ 700 } size="lg">
                    { event.Title }
                </Text>
                <Text>{ event.DateText }</Text>
                <Text>{ event.Time }</Text>
                <Text>{ event.Location }</Text>
                <Text>{ event.Capacity }</Text>
            </Stack>
        </Paper>
    );
}