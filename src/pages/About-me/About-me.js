import "./About-me.css";

import { infoPersonal } from "../../utils/personal-information";
import { cardPersonal } from "../../../src/components/Card-personal/Card-personal"

export const AboutMe = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section>
        <h2>About Me</h2>
        <h3>Conóceme</h3>
        <article>
            ${infoPersonal.map((el) => cardPersonal(el.icon, el.desc)).join("")}
        </article>
    </section>
    `

}