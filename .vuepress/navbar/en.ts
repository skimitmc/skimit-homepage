import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Guide",
    icon: "book",
    prefix: "/guide/",
    children: [
      {
        text: "Join the game",
        icon: "right-to-bracket",
        link: "join/",
      },
      {
        text: "Rules",
        icon: "file-shield",
        link: "rules/",
      },
    ],
  },
  {
    text: "History",
    icon: "calendar",
    link: "history/",
  },
  {
    text: "Web map",
    icon: "map",
    link: "https://bluemap.skimit.net",
  },
]);
