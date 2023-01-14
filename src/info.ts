import { Projects, Skills } from "./interfaces";

export const skills: Skills = {
  frontend: [
    "HTML",
    "CSS/SCSS",
    "JavaScript(ES6)/TypeScript",
    "React.js",
    "Redux Toolkit",
    "TailWind",
    "RapidAPI",
  ],
  backend: [""],
  design: ["Photoshop", "Figma"],
  other: ["Git", "English(Intermediate)", "Digital Art", "Video Editing"],
};

export const projects: Projects = {
  nativeJsProjects: [
    {
      title: "Game: Dies Iræ",
      description: "My own first project. Multiplayer game.",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://gentle-maamoul-4be002.netlify.app/",
      git: "https://github.com/outofs/dies-irae",
      img: "projects-img/prjct1.png",
    },

    {
      title: "Bankist App",
      description:
        "Aplication that simulates the performance of certain banking functions.",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://capable-genie-e755c7.netlify.app/",
      git: "https://github.com/outofs/bankist-app",
      img: "projects-img/prjct2.png",
    },

    {
      title: "Mapty",
      description: "First project where I'm used API.",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://strong-malabi-c96f8b.netlify.app/",
      git: "https://github.com/outofs/project-mapty",
      img: "projects-img/prjct7.png",
    },

    {
      title: "Forkify",
      description: "Library of diferent culinary recipes.",
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "ForkifyAPI",
        "MCV Architecture",
        "Git",
      ],
      demo: "https://kaleidoscopic-frangipane-33b074.netlify.app/",
      git: "https://github.com/outofs/forkify-course-project",
      img: "projects-img/prjct3.png",
    },

    {
      title: "Forecast App",
      description:
        "My responsive forecast application where i'm used OpenWeatherMap API.",
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "Git",
        "OpenWeatherMap API",
        " Geolocation API",
      ],
      demo: "https://lucent-pavlova-0da62e.netlify.app/",
      git: "https://github.com/outofs/forecast-project",
      img: "projects-img/prjct4.png",
    },

    {
      title: "Golden Store",
      description: "Jewelry eCommerce responsive website Design.",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://quiet-dango-d64ad8.netlify.app/",
      git: "https://github.com/outofs/golden-store-project",
      img: "projects-img/prjct5.png",
    },

    {
      title: "Bankist website page",
      description: "Web page with some JS scripts.",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://exquisite-choux-543d84.netlify.app/",
      git: "https://github.com/outofs/bankist-landing-page",
      img: "projects-img/prjct6.png",
    },
  ],
  reactProjects: [
    {
      title: "Note App",
      description: "Create, archive, edit and remove notes",
      technologies: ["TypeScript", "CSS", "React", "Git", "Redux Toolkit"],
      demo: "https://outofs.github.io/notes-app-task-2/",
      git: "https://github.com/outofs/notes-app-task-2",
      img: "react-img/prjct1.png",
    },

    {
      title: "Music App",
      description:
        "Responsive music app. Search and listen top music or top Artists.",
      technologies: [
        "JavaScript",
        "TailWind",
        "React",
        "Git",
        "Redux Toolkit",
        "RapidApi",
        "Shazam Core API",
        "IP Geolocation API",
      ],
      demo: "https://gleaming-croquembouche-c1d5b9.netlify.app/",
      git: "https://github.com/outofs/music-app",
      img: "react-img/prjct2.png",
    },

    {
      title: "Sanime",
      description: "Responsive anime website.",
      technologies: [
        "TypeScript",
        "SCSS",
        "React",
        "Redux Toolkit",
        "RapidApi",
        "AnimeDB API",
        "Git",
      ],
      demo: "https://outofs.github.io/react-anime-website",
      git: "https://github.com/outofs/react-anime-website",
      img: "react-img/prjct3.png",
    },
  ],
};
