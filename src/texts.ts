import { Language } from "@/types/language";

const texts: Record<string, Record<Language, string>> = {
  navbarHomeLink: {
    "en": "Home",
    "es": "Inicio"
  },
  welcome: {
    en: "Hello Linkedin!",
    es: "¡Hola Linkedin!",
  },
  homePageCopy: {
    en: "I'm a web developer and game developer, and I also do some art.",
    es: "Soy un desarrollador web y desarrollador de juegos, y también hago algo de arte.",
  },
  about: {
    en: "About Me",
    es: "Sobre mí",
  },
  contact: {
    en: "Contact",
    es: "Contacto",
  },
  projects: {
    en: "Projects",
    es: "Proyectos",
  }
};

export default texts;