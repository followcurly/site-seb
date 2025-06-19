export const SITE = {
  website: "https://site-seb.com/",
  author: "Sebastian Diaz Saez",
  profile: "https://site-seb.com/",
  desc: "A clean, typewriter-style personal website featuring long thoughts and intellectual missives from my digital atelier.",
  title: "Sebastian Diaz Saez",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false, // Using single clean design
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit",
    url: "",
  },
  dynamicOgImage: false,
  dir: "ltr",
  lang: "en",
  timezone: "America/New_York",
  substackUrl: "https://followcurly.substack.com/",
} as const;
