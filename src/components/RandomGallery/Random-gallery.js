import { secretGallery } from "../../utils/secret-gallery";

export const arrayRamdon = [...secretGallery]

export const randomGallery = () => {
    const logoLink = document.getElementById("logolink");

    logoLink.addEventListener("click", () => {
        // console.log("estoy haciendo click en el logo")

        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }

        shuffle(arrayRamdon);

        // console.log(arrayRamdon);
    });

};
