import "./Gallery.css";

// import { secretGallery } from "../../utils/secret-gallery";
import { arrayRamdon } from "../../../src/components/RandomGallery/Random-gallery";
import { cardGallery } from "../../../src/components/Card-gallery/Card-gallery";

export const Gallery = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="container">
        <h4>Bienvenido a la galería secreta de mi mascota</h4>
            <article class="gallery">
                ${arrayRamdon.map((el) => cardGallery(el.img)).join("")}
            </article>
        <p>¿No te gusta el orden de las fotos? Haz click nuevamente sobre el logo del gatito ✌🏼😊</p>
    </section>
    `;
};