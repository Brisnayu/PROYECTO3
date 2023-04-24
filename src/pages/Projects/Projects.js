import "./Projects.css";

import { projectsData } from "../../utils/projects-data";
import { cardProject } from "../../components/Card-projects/Card-projects";

let i = 0;

export const Project = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="container">
        <h4>Proyectos</h4>
        <article class="container-project">
        ${projectsData.map((el) => 
            cardProject(el.img, el.title, el.goal, el.description, el.tech, el.link, el.github)).join("")
        }
        </article>
    </section>
    `
}

// ${infoPersonal.map((el) => cardPersonal(el.photo, el.alt, el.desc)).join("")}