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

export const Project = () => {
  const main = document.querySelector("main");

  main.innerHTML = `${
    projects.length === 0
      ? `<h2>Cargando...</h2>`
      : `<section class="container">
        <h4>Proyectos</h4>
        <article class="container-project">
        ${projects
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
    </section>`
  }
    
    `;
};
