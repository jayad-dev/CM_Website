"use client";
import { Container, Group, Box, Text, Stack } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import classes from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Events", href: "/events" },
      { label: "Free Classes", href: "/free-classes" },
    ],
    resources: [
      { label: "Your Path", href: "/your-path" },
      { label: "Seva & Volunteering", href: "/seva-volunteering" },
      { label: "CM75 Events", href: "/cm75-events" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl" className={classes.container}>
        <div className={classes.content}>
          {/* Logo and Description */}
          <Stack className={classes.brandSection}>
            <Link href="/" className={classes.logo}>
              <Image
                src="/assets/image/logo.svg"
                alt="Logo"
                width={120}
                height={88}
              />
            </Link>
            <Text className={classes.description}>
              Empowering lives through spiritual growth, community service, and
              meaningful connections.
            </Text>
            <Group gap="md">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.socialLink}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </Group>
          </Stack>

          {/* Quick Links */}
          <Stack className={classes.linksSection}>
            <Text className={classes.sectionTitle}>Quick Links</Text>
            {footerLinks.quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className={classes.link}>
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Resources */}
          <Stack className={classes.linksSection}>
            <Text className={classes.sectionTitle}>Resources</Text>
            {footerLinks.resources.map((link) => (
              <Link key={link.href} href={link.href} className={classes.link}>
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Legal */}
          <Stack className={classes.linksSection}>
            <Text className={classes.sectionTitle}>Legal</Text>
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className={classes.link}>
                {link.label}
              </Link>
            ))}
          </Stack>
        </div>

        {/* Bottom Bar */}
        <div className={classes.bottomBar}>
          <Text className={classes.copyright}>
            © {currentYear} CMUK. All rights reserved.
          </Text>
        </div>
      </Container>
    </Box>
  );
}
