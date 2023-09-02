import "./Projects.css";

import { projectsData } from "../../utils/projects-data";
import { cardProject } from "../../components/Card-projects/Card-projects";

let projects = [];

export const getProjects = async () => {
    const res = await fetch("https://prueba-api-proyectos.vercel.app/getprojects");
    const respuesta = await res.json();

    projects = respuesta;
}

export const Project = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="container">
        <h4>Proyectos</h4>
        <article class="container-project">
        ${projects.reverse().map((el) => 
            cardProject(el.img, el.title, el.goal, el.description, el.tech, el.link, el.github)).join("")
        }
        </article>
    </section>
    `
};