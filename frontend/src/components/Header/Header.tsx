
"use client";

import {
  Container,
  Group,
  Box,
  Button,
  TextInput,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { HeaderData } from "@/types/strapi";
import { getMediaUrl } from "@/lib/strapi";

interface HeaderProps {
  data: HeaderData | null;
}

export default function Header({ data }: HeaderProps) {
  const [openSearch, setOpenSearch] = useState(false);
  const [opened, setOpened] = useState(false);

  const navLinks = [
    {
      label: data?.YourPath || "Your Path",
      href: data?.yourPathLink || "/your-path",
    },
    {
      label: data?.FreeClasses || "Free Classes",
      href: data?.freeClassesLink || "/free-classes",
    },
    {
      label: data?.Events || "Events",
      href: data?.eventsLink || "/events",
    },
    {
      label: data?.SevaVolunteering || "Seva & Volunteering",
      href: data?.sevavolunteeringLink || "/seva-volunteering",
    },
    {
      label: data?.CM75Events || "CM75 Events",
      href: data?.CM75EventsLink || "/cm75-events",
    },
    {
      label: data?.About || "About",
      href: data?.aboutLink || "/about",
    },
  ];

  const logoUrl = data?.logo
    ? getMediaUrl(data.logo) || "/assets/image/logo.svg"
    : "/assets/image/logo.svg";

  const logoAlt =
    data?.logo?.data?.alternativeText ||
    data?.logo?.alternativeText ||
    "Logo";

  return (
    <>
      <Box
        component="header"
        style={{
          background: "#7B2E36",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container size="xl" py={12}>
          <Group justify="space-between" align="center">
            
            <Link href="/">
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={100}
                height={70}
                priority
              />
            </Link>
            <Group
              gap={40}
              visibleFrom="md"
              style={{ color: "white" }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 400,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Group>

            <Group gap={16} visibleFrom="md">
              {openSearch ? (
                <TextInput
                  placeholder="Search..."
                  radius="md"
                  autoFocus
                  onBlur={() => setOpenSearch(false)}
                />
              ) : (
                <FiSearch
                  size={20}
                  color="white"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenSearch(true)}
                />
              )}

              <Button
                component={Link}
                href="/discover"
                radius="md"
                style={{
                  background: "white",
                  color: "#7B2E36",
                  fontWeight: 500,
                }}
              >
                Start Discovering
              </Button>
            </Group>

            <Burger
              opened={opened}
              onClick={() => setOpened(!opened)}
              hiddenFrom="md"
              color="white"
            />
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="100%"
        padding="md"
        hiddenFrom="md"
      >
        <Stack gap={24}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 500,
              }}
              onClick={() => setOpened(false)}
            >
              {link.label}
            </Link>
          ))}

          <Button
            component={Link}
            href="/discover"
            radius="md"
            style={{
              background: "#7B2E36",
            }}
          >
            Start Discovering
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}