import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://berlotto.me/",
  author: "Sérgio Berlotto",
  desc: "De código a gestão: navegando pelo universo da engenharia de software, arquitetura e soluções práticas.",
  title: "berlotto.me",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 25,
  twitterAccount: "berlotto",
  tags: [
    "Sérgio Berlotto",
    "líder técnico",
    "blog pessoal",
    "arquiteto de software",
    "arquiteto de solução",
    "tech lead",
    "engenheiro de software",
  ],
};

export const LOCALE = ["pt-BR"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/berlotto",
    linkTitle: `${SITE.author} no Github`,
    active: true,
  },
  {
    name: "Lattes",
    href: "http://lattes.cnpq.br/4694493948099167",
    linkTitle: `${SITE.author} no CNPQ Lattes`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sberlotto",
    linkTitle: `${SITE.author} no Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sergioberlotto/",
    linkTitle: `${SITE.author} no LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/adammckerlie",
    linkTitle: `${SITE.author} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "",
    linkTitle: `${SITE.author} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.author} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.author} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `${SITE.author} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.author} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.author} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.author} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.author} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.author} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `${SITE.author} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.author} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.author} on Mastodon`,
    active: false,
  },
  {
    name: "RSS",
    href: `https://${SITE.website}/index.xml`,
    linkTitle: `${SITE.title} RSS`,
    active: true,
  },
];
