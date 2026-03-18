
"use client";

import {
  Container,
  Grid,
  Text,
  Stack,
  Group,
  Anchor,
  TextInput,
  ActionIcon,
  Divider,
  Box,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
  IconSend,
  IconMapPin,
  IconMail,
  Icon,
} from "@tabler/icons-react";
import Image from "next/image";
import { FooterData } from "@/types/strapi";
import { getMediaUrls } from "@/lib/strapi";

interface FooterProps {
  data: FooterData | null;
}

export default function Footer( { data }: FooterProps ) {
  if ( !data ) return null;

  const logo = data.Logo ? getMediaUrls( data.Logo )[0] : "";
  const vectorImage = data.vectorImage
    ? getMediaUrls( data.vectorImage )[0]
    : "";

  const socialIcons: Record<string, Icon> = {
    facebook: IconBrandFacebook,
    twitter: IconBrandTwitter,
    instagram: IconBrandInstagram,
    youtube: IconBrandYoutube,
  };

  return (
    <Box
      pos="relative"
      pt={ 80 }
      pb={ 40 }
      style={ {
        background:
          "linear-gradient(180deg, #1A1A2E 0%, #16213E 50%, #1A1A2E 100%)",
        borderTopLeftRadius: 64,
        borderTopRightRadius: 64,
        overflow: "hidden",
      } }
    >
      { vectorImage && (
        <Box
          pos="absolute"
          top={ 0 }
          left={ 0 }
          w={ 500 }
          h={ 500 }
          opacity={ 0.12 }
          style={ {
            zIndex: 0,
          } }
        >
          <Image
            src={ vectorImage }
            alt="bg"
            fill
            style={ { objectFit: "contain" } }
          />
        </Box>
      ) }

      <Container size="xl" pos="relative" style={ { zIndex: 1 } }>
        <Grid gutter={ 60 }>
          <Grid.Col span={ { base: 12, md: 4 } }>
            <Stack gap="md">
              { logo && (
                <Image src={ logo } alt="logo" width={ 140 } height={ 70 } />
              ) }

              <Text c="rgba(255,255,255,0.7)" fz={ 14 } maw={ 260 }>
                { data.description }
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={ { base: 6, md: 2 } }>
            <Text c="white" fw={ 600 } mb={ 12 }>
              Quick Links
            </Text>

            <Stack gap={ 8 }>
              { data.QuickLinks?.map( ( item, i ) => (
                <Anchor key={ i } href={ item.url || "#" } c="gray.4" fz={ 14 }>
                  { item.label }
                </Anchor>
              ) ) }
            </Stack>
          </Grid.Col>

          <Grid.Col span={ { base: 6, md: 2 } }>
            <Text c="white" fw={ 600 } mb={ 12 }>
              Resources
            </Text>

            <Stack gap={ 8 }>
              { data.Resources?.map( ( item, i ) => (
                <Anchor key={ i } href={ item.url || "#" } c="gray.4" fz={ 14 }>
                  { item.label }
                </Anchor>
              ) ) }
            </Stack>
          </Grid.Col>

          <Grid.Col span={ { base: 12, md: 4 } }>
            <Text c="white" fw={ 600 } mb={ 12 }>
              Stay Connected
            </Text>

            <Stack gap="sm">
              <Group gap={ 8 } align="flex-start">
                <IconMapPin size={ 16 } color="rgba(255,255,255,0.7)" />
                <Text c="gray.4" fz={ 14 }>
                  { data.Address }
                </Text>
              </Group>

              <Group gap={ 8 }>
                <IconMail size={ 16 } color="rgba(255,255,255,0.7)" />
                <Anchor href={ `mailto:${data.Email}` } c="gray.4" fz={ 14 }>
                  { data.Email }
                </Anchor>
              </Group>

              <Box
                mt={ 16 }
                p="md"
                bg="rgba(255,255,255,0.05)"
                style={ {
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.1)",
                } }
              >
                <Stack gap="sm">
                  <Text c="gray.3" fz={ 14 }>
                    { data.NewsletterTitle }
                  </Text>

                  <Box pos="relative">
                    <TextInput
                      placeholder="Your email"
                      radius="xl"
                      pr={ 70 }
                      styles={ {
                        input: {
                          background: "rgba(255,255,255,0.08)",
                          border: "none",
                          color: "white",
                          height: 44,
                        },
                      } }
                    />

                    <ActionIcon
                      pos="absolute"
                      top="50%"
                      right={ 4 }
                      w={ 48 }
                      h={ 38 }
                      radius={ 16 }
                      style={ { transform: "translateY(-50%)" } }
                      styles={ {
                        root: {
                          background:
                            "linear-gradient(135deg, #ff5a3c, #ff7a3c)",
                          color: "white",
                        },
                      } }
                    >
                      <IconSend size={ 18 } />
                    </ActionIcon>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my={ 40 } color="rgba(255,255,255,0.1)" />

        <Stack align="center" gap="md">
          <Group>
            { data.SocialLink?.map( ( item ) => {
              const key = item.Platform?.trim().toLowerCase().replace( /\s+/g, "" );

              const Icon = socialIcons[key as keyof typeof socialIcons];

              if ( !Icon ) return null;

              return (
                <ActionIcon
                  key={ item.id }
                  component="a"
                  href={ item.url || "#" }
                  target="_blank"
                  radius="xl"
                  styles={ {
                    root: {
                      background: "rgba(255,255,255,0.08)",
                      color: "white",
                    },
                  } }
                >
                  <Icon size={ 16 } />
                </ActionIcon>
              );
            } ) }
          </Group>

          <Text c="dimmed" fz={ 12 }>
            { data.copyrightText }
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}