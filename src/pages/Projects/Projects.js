import "./Projects.css";

import { projectsData } from "../../utils/projects-data";
import { cardProject } from "../../components/Card-projects/Card-projects";

let projects = [];

export const getProjects = async () => {
  const res = await fetch(
    "https://prueba-api-proyectos.vercel.app/getprojects"
  );
  const respuesta = await res.json();

  projects = await respuesta;
};

console.log(projects);

export const Project = () => {
  const main = document.querySelector("main");

  main.innerHTML = `<section class="container">
        <h4>Projects</h4>
        <article class="container-project">
        ${projectsData
          .reverse()
          .map((project) =>
            cardProject(
              project.img,
              project.title,
              project.goal,
              project.description,
              project.tech,
              project.link,
              project.github
            )
          )
          .join("")}
        </article>
    </section>`;
};
