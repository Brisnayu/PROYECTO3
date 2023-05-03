import "./Card-gallery.css";

export const cardGallery = (img, date) => {
    return `
        <div class="card-gallery">
            <img class="img-gallery" src="${img}" alt="my cat Hera">
            <h2>${date}</h2>
        </div>
    `
}


