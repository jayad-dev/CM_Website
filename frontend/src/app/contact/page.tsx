import { Container, Stack, Text, Title } from "@mantine/core";

export default function ContactPage() {
    return (
        <Container size="lg" py={ 48 }>
            <Stack gap="md">
                <Title order={ 1 }>Contact</Title>
                <Text>Email: info@cmuk.org</Text>
                <Text>Phone: +44 0000 000 000</Text>
            </Stack>
        </Container>
    );
}

