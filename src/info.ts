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
  backend: ["Node.js", "Express", "REST API", "Mongoose(MongoDB)"],
  design: ["Photoshop", "Figma"],
  other: ["Git", "English(Intermediate)", "Digital Art", "Video Editing"],
};

export const projects: Projects = {
  nativeJsProjects: [
    {
      title: "Natours",
      description:
        "MERN stack project. Tour catalog with auth, payment and REST  functionality.",
      technologies: [
        "JavaScript",
        "Node.js",
        "Express",
        "Mongoose",
        "CSS",
        "PUG",
        "Git",
        "MCV",
      ],
      demo: "https://natours-node-j9u7.onrender.com/",
      git: "https://github.com/outofs/natours",
      img: "projects-img/prjct4.png",
    },
    {
      title: "Bankist App",
      description:
        "Application that simulates the performance of certain banking functions.",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://capable-genie-e755c7.netlify.app/",
      git: "https://github.com/outofs/bankist-app",
      img: "projects-img/prjct2.png",
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
      title: "Game: Dies Iræ",
      description:
        "My own first project. Multiplayer game. (!!!ONLY FOR PC!!!)",
      technologies: ["JavaScript", "CSS", "HTML", "Git"],
      demo: "https://gentle-maamoul-4be002.netlify.app/",
      git: "https://github.com/outofs/dies-irae",
      img: "projects-img/prjct1.png",
    },
    {
      title: "Forkify",
      description: "Library of diferent culinary recipes.",
      technologies: [
        "JavaScript",
        "SCSS",
        "HTML",
        "ForkifyAPI",
        "MCV Architecture",
        "Git",
      ],
      demo: "https://kaleidoscopic-frangipane-33b074.netlify.app/",
      git: "https://github.com/outofs/forkify-course-project",
      img: "projects-img/prjct3.png",
    },
    // {
    //   title: "Bankist website page",
    //   description: "Web page with some JS scripts.",
    //   technologies: ["JavaScript", "CSS", "HTML", "Git"],
    //   demo: "https://exquisite-choux-543d84.netlify.app/",
    //   git: "https://github.com/outofs/bankist-landing-page",
    //   img: "projects-img/prjct6.png",
    // },
  ],
  reactProjects: [
    {
      title: "React Forecast App",
      description:
        "My responsive forecast application where i'm used OpenWeatherMap API.",
      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "HTML",
        "Git",
        "OpenWeatherMap API",
        "GeoDB Cities",
      ],
      demo: "https://outofs.github.io/react-forecast-app/",
      git: "https://github.com/outofs/react-forecast-app",
      img: "react-img/prjct4.png",
    },
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
