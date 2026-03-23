import { Container, Stack, Text, Title } from "@mantine/core";

export default function AboutPage() {
    return (
        <Container size="lg" py={ 48 }>
            <Stack gap="md">
                <Title order={ 1 }>About Us</Title>
                <Text c="dimmed">
                    Welcome to CMUK. This page is part of the new App Router structure.
                    You can split sections into reusable components and import them from
                    `@/components`.
                </Text>
            </Stack>
        </Container>
    );
}

