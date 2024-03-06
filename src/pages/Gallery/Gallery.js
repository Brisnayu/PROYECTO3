import "./Gallery.css";

import { arrayRamdon } from "../../../src/components/RandomGallery/Random-gallery";
import { cardGallery } from "../../../src/components/Card-gallery/Card-gallery";

export const Gallery = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="container">
        <h4>Secret Gallery of My Pet</h4>
            <article class="gallery">
                ${arrayRamdon
                  .map((el) => cardGallery(el.img, el.date))
                  .join("")}
            </article>
        <p>Do you dislike the order of the photos? Click again on the kitty logo. ✌🏼😊</p>
    </section>
    `;
};
