import { Container, List, Stack, Text, Title } from "@mantine/core";

export default function ProgramsPage() {
    return (
        <Container size="lg" py={ 48 }>
            <Stack gap="md">
                <Title order={ 1 }>Programs</Title>
                <Text c="dimmed">
                    Use this route for course listings, retreats, and upcoming sessions.
                </Text>
                <List>
                    <List.Item>Meditation courses</List.Item>
                    <List.Item>Weekend retreats</List.Item>
                    <List.Item>Community events</List.Item>
                </List>
            </Stack>
        </Container>
    );
}

