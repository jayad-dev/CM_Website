import { Container, Stack, Text, Title } from "@mantine/core";

export default function DiscoverPage() {
    return (
        <Container size="lg" py={ 48 }>
            <Stack gap="md">
                <Title order={ 1 }>Discover</Title>
                <Text c="dimmed">
                    This is the discover page route. Add your discover content sections
                    here and import shared components from `@/components`.
                </Text>
            </Stack>
        </Container>
    );
}

