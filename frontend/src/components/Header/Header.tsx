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
import { APP_MENU_LINKS, APP_ROUTES } from "@/app/routes";
import { usePathname } from "next/navigation";

interface HeaderProps {
  data: HeaderData | null;
}

export default function Header( { data }: HeaderProps ) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [openSearch, setOpenSearch] = useState( false );
  const [opened, setOpened] = useState( false );

  const cmsNavLinks =
    data?.menuitems
      ?.filter( ( item ) => item?.label && item?.url )
      .map( ( item ) => ( {
        label: item.label!,
        href: item.url?.startsWith( "/" ) ? item.url : `/${item.url}`,
      } ) ) || [];

  const navLinks = cmsNavLinks.length > 0 ? cmsNavLinks : APP_MENU_LINKS;



  const logoUrl = data?.logo
    ? getMediaUrl( data.logo ) || "/assets/image/logo.svg"
    : "/assets/image/logo.svg";

  const logoAlt =
    data?.logo?.data?.alternativeText ||
    data?.logo?.alternativeText ||
    "Logo";

  return (
    <>
      <Box
        component="header"
        style={ {
          background: isHome
            ? "#7B2E36"
            : "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 100%)",
          backdropFilter: isHome ? "none" : "saturate(150%) blur(6px)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          boxShadow: isHome ? undefined : "0 1px 0 rgba(255,255,255,0.08)",
        } }
      >
        <Container size="xl" py={ 12 }>
          <Group justify="space-between" align="center">
            <Link href="/">
              <Image
                src={ logoUrl }
                alt={ logoAlt }
                width={ 100 }
                height={ 70 }
                priority
              />
            </Link>

            <Group gap={ 40 } visibleFrom="md" c="white">
              { navLinks.map( ( link, index ) => (
                <Link
                  key={ index }
                  href={ link.href }
                  style={ {
                    color: "white",
                    textDecoration: "none",
                    fontSize: 16,
                    fontWeight: 400,
                  } }
                >
                  { link.label }
                </Link>
              ) ) }
            </Group>

            <Group gap={ 16 } visibleFrom="md">
              { openSearch ? (
                <TextInput
                  placeholder="Search..."
                  radius="md"
                  autoFocus
                  onBlur={ () => setOpenSearch( false ) }
                  styles={ {
                    input: {
                      color: isHome ? "inherit" : "white",
                      background: isHome ? "white" : "transparent",
                      border: isHome ? "1px solid #e9ecef" : "1px solid rgba(255,255,255,0.6)",
                    },
                    section: {
                      color: "white",
                    },
                  } }
                />
              ) : (
                <FiSearch
                  size={ 20 }
                  color="white"
                  style={ { cursor: "pointer" } }
                  onClick={ () => setOpenSearch( true ) }
                />
              ) }

              <Button
                component={ Link }
                href={ APP_ROUTES.discover }
                radius="md"
                style={ {
                  background: "white",
                  color: "#7B2E36",
                  fontWeight: 500,
                } }
              >
                Start Discovering
              </Button>
            </Group>

            <Burger
              opened={ opened }
              onClick={ () => setOpened( !opened ) }
              hiddenFrom="md"
              color="white"
            />
          </Group>
        </Container>
      </Box>

      <Drawer
        opened={ opened }
        onClose={ () => setOpened( false ) }
        size="100%"
        padding="md"
        hiddenFrom="md"
      >
        <Stack gap={ 24 }>
          { navLinks.map( ( link, index ) => (
            <Link
              key={ index }
              href={ link.href }
              style={ {
                textDecoration: "none",
                fontSize: 18,
                fontWeight: 500,
              } }
              onClick={ () => setOpened( false ) }
            >
              { link.label }
            </Link>
          ) ) }

          <Button
            component={ Link }
            href={ APP_ROUTES.discover }
            radius="md"
            style={ {
              background: "#7B2E36",
            } }
          >
            Start Discovering
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}