import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "指南",
    icon: "book",
    prefix: "/zh/guide/",
    children: [
      {
        text: "加入游戏",
        icon: "right-to-bracket",
        link: "join/",
      },
      {
        text: "规则",
        icon: "file-shield",
        link: "rules/",
      },
    ],
  },
  {
    text: "历史",
    icon: "calendar",
    link: "/zh/history/",
    prefix: "/zh/history/",
    children: ["2019/", "2020/", "2022/", "2023/"],
  },
  {
    text: "网页地图",
    icon: "map",
    link: "https://bluemap.skimit.net",
  },
]);
