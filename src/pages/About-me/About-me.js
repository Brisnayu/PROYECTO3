import "./About-me.css";

import { infoPersonal } from "../../utils/personal-information";
import { cardPersonal } from "../../../src/components/Card-personal/Card-personal";

export const AboutMe = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="container">
        <h4>Get to know me better</h4>
        <article class="main-personal">
            ${infoPersonal.map((el) => cardPersonal(el.photo, el.alt, el.desc)).join("")}
        </article>
    </section>
    `

}