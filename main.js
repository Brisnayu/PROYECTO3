import "./style.css";
import "./src/components/Dark-mode/Dark-mode.css";

// Constantes
import { Header } from "./src/components/Header/Header";
import { Footer } from "./src/components/Footer/Footer";

// Diferentes páginas
import { Gallery } from "./src/pages/Gallery/Gallery";
import { Home } from "./src/pages/Home/Home";
import { AboutMe } from "./src/pages/About-me/About-me";
import { Project, getProjects } from "./src/pages/Projects/Projects";

// Funcionalidad
import { changeTheme } from "./src/components/Dark-mode/Dark-mode";
import { randomGallery } from "./src/components/RandomGallery/Random-gallery";
import { showContent } from "./src/components/Footer/Footer";
import { linkPage } from "./src/utils/linkpage";


document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();

Home();
changeTheme();
randomGallery();
showContent();
await getProjects();

// Ejecutando los links
linkPage("#logolink", Gallery);
linkPage("#homelink", Home);
linkPage("#aboutmelink", AboutMe);
linkPage("#projectlink", Project);
