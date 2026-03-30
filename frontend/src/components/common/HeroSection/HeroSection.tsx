"use client";

import { Box, Container, Title, Text, Group, Button, Overlay, Stack } from "@mantine/core";
import { getStrapiMedia } from "@/lib/strapi";

interface HeroProps {
    data: {
        Title: string;
        Description: string;
        BackgroundImage: {
            url: string;
        };
        PrimaryButton?: { label: string; href: string };
        SecondaryButton?: { label: string; href: string };
    };
}

export default function HeroSection( { data }: HeroProps ) {
    const bg: unknown = data?.BackgroundImage as unknown;
    const bgObj =
        ( bg && typeof bg === "object" ? ( bg as Record<string, unknown> ) : undefined ) || undefined;
    const bgData = ( bgObj?.["data"] as Record<string, unknown> | undefined );
    const bgAttr =
        bgData &&
        typeof bgData === "object" &&
        ( bgData as Record<string, unknown> )["attributes"] as Record<string, unknown> | undefined;
    const rawUrl =
        ( bgObj && ( bgObj["url"] as string | undefined ) ) ||
        ( bgAttr && ( bgAttr["url"] as string | undefined ) ) ||
        "";
    const imageUrl = getStrapiMedia( rawUrl ) || rawUrl || "";

    return (
        <Box
            pos="relative"
            h={ { base: 400, md: 600 } }
            style={ {
                backgroundColor: "#000",
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            } }
        >
            <Overlay color="#000" opacity={ 0.4 } zIndex={ 1 } />

            <Container size="md" h="100%" pos="relative" style={ { zIndex: 2 } }>
                <Stack h="100%" justify="center" align="center" gap="lg">

                    <Title
                        order={ 1 }
                        c="white"
                        ta="center"
                        ff="Philosopher"
                        fz={ { base: 40, md: 64 } }
                        fw={ 700 }
                        style={ { lineHeight: 1.1 } }
                    >
                        { data.Title }
                    </Title>

                    <Text
                        c="gray.2"
                        ta="center"
                        maw={ 800 }
                        fz={ { base: "md", md: "xl" } }
                        ff="Lexend"
                        lh="md"
                    >
                        { data.Description }
                    </Text>

                    <Group gap="md" mt="xl">
                        { data.PrimaryButton && (
                            <Button
                                size="lg"
                                radius="md"
                                bg="white"
                                c="#C84C5C"
                                px={ 40 }
                                component="a"
                                href={ data.PrimaryButton.href }
                                variant="white"
                                style={ { fontWeight: 600 } }
                            >
                                { data.PrimaryButton.label }
                            </Button>
                        ) }

                        { data.SecondaryButton && (
                            <Button
                                size="lg"
                                radius="md"
                                variant="outline"
                                color="white"
                                px={ 40 }
                                component="a"
                                href={ data.SecondaryButton.href }
                                style={ { borderWidth: 2 } }
                            >
                                { data.SecondaryButton.label }
                            </Button>
                        ) }
                    </Group>
                </Stack>
            </Container>
        </Box>
    );
}