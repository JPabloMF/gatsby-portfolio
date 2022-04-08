import minerLight from "./images/projects/minerlight.png";
import dailyfity from "./images/projects/dailyfity.png";
import cryptocurrencies from "./images/projects/cryptocurrencies.png";

export const CAROUSEL_PROJECTS = [
  {
    title: "Miner light",
    description: "Miner light is my first try to make a game by my own.",
    backgroundImage: minerLight,
    technologies: ["godot", "aseprite"],
    button: {
      title: "Open project",
      link: "https://jpablomf.github.io/html-minerlight1.1/",
    },
  },
  {
    title: "DailyFity",
    description:
      "DailyFity it's a platform that You can use to have an order in your training routine.",
    backgroundImage: dailyfity,
    technologies: ["react", "redux", "typescript", "git"],
    button: {
      title: "Open project",
      link: "https://dailyfity.vercel.app",
    },
  },
  {
    title: "Criptocurrencies",
    description:
      "cryptocurrencies it's a platform that show you some of the most famous crypto currencies and their values.",
    backgroundImage: cryptocurrencies,
    technologies: ["react", "styledcomponents", "git"],
    button: {
      title: "Open project",
      link: "https://cryptocurrencies.vercel.app/",
    },
  },
];
