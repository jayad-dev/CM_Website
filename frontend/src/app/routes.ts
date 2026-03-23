export type AppMenuLink = {
  label: string;
  href: string;
};

export const APP_ROUTES = {
  home: "/",
  about: "/about",
  programs: "/programs",
  contact: "/contact",
  discover: "/discover",
} as const;

// Central App Router links: import this anywhere in src/app or components.
export const APP_MENU_LINKS: AppMenuLink[] = [
  { label: "Home", href: APP_ROUTES.home },
  { label: "About", href: APP_ROUTES.about },
  { label: "Programs", href: APP_ROUTES.programs },
  { label: "Contact", href: APP_ROUTES.contact },
];

