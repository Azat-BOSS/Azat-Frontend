import htmlIcon from "./images/skillsIcons/htmlIcon.svg"
import cssIcon from "./images/skillsIcons/cssIcon.svg"
import jsIcon from "./images/skillsIcons/jsIcon.svg"
import reactIcon from "./images/skillsIcons/reactIcon.svg"
import reduxIcon from "./images/skillsIcons/redux.svg"
import nodejsIcon from "./images/skillsIcons/nodejsIcon.svg"
import mongodbIcon from "./images/skillsIcons/mongodb.svg"
import materialIcon from "./images/skillsIcons/materailIcon.svg"
import webpackIcon from "./images/skillsIcons/webpack.svg"

import mestoProject from "./images/mestoproject.webp"
import antoolsProject from "./images/antools.webp"
import burgerProject from "./images/reactBurger.png"

export const skillCardData = [
  {
    image: htmlIcon,
    name: "HTML",
    text: "HTML is a standardised hypertext markup language for viewing web pages in a browser.",
  },
  {
    image: cssIcon,
    name: "CSS",
    text: "CSS is a formal language for describing the appearance of a document written using a markup language.",
  },
  {
    image: jsIcon,
    name: "JavaScript",
    text: "JavaScript is a multi-paradigm programming language. It supports object-oriented, imperative and functional styles.",
  },
  {
    image: webpackIcon,
    name: "Webpack",
    text: "Webpack is a free and open-source module bundler for JavaScript.",
  },
  {
    image: reactIcon,
    name: "React",
    text: "React is an open-source JavaScript library for developing user interfaces.",
  },
  {
    image: reduxIcon,
    name: "Redux",
    text: "Redux is an open source JavaScript library for managing application state.",
  },
  {
    image: nodejsIcon,
    name: "NodeJS",
    text: "Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications.",
  },
  {
    image: mongodbIcon,
    name: "MongoDB",
    text: "MongoDB is a document-oriented database management system that does not require a table schema description.",
  },
  {
    image: materialIcon,
    name: "Material UI",
    text: "Material UI is an open-source React component library that implements Google's Material Design.",
  },
]

export const worksData = [
  {
    title: "Mesto",
    text: "Mesto - mini clone Instagram, where you can create posts on your own.",
    gitLink: "https://github.com/Azat-BOSS/Mesto",
    weblink: "https://azat-boss.github.io/Mesto",
    image: mestoProject
  },
  {
    title: "Antools",
    text: "Antools - layout on react and redux. Awesome tools for Designer & Developer.",
    gitLink: "https://github.com/Azat-BOSS/Antools",
    weblink: "https://tiny-dieffenbachia-18fabc.netlify.app",
    image: antoolsProject
  },
  {
    title: "Burger Stellar",
    text: "Burget Stellar - online food store, where you can create your burger on your own.",
    gitLink: "https://github.com/Azat-BOSS/Burger-stellar",
    weblink: "https://github.com/Azat-BOSS/Burger-stellar",
    image: burgerProject
  },
]