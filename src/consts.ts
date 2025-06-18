import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ariel Azoff",
  DESCRIPTION: "New York City and Brooklyn tour guide and historian.",
  EMAIL: "arielazoff@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "New York City and Brooklyn tour guide and historian.",
};

export const BLOG: Metadata = {
  TITLE: "Articles",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Tours",
  DESCRIPTION: "More information about my tours.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Instagram",
    HREF: "https://instagram.com/arielazoff",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/arielazoff",
  },
  {
    NAME: "Email",
    HREF: "mailto:ariel@arielazoff.com",
  },
];
