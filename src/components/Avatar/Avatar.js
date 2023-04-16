import "./Avatar.css";

export const Avatar = (image, descrip) => {
    return `<img src=${image} alt=${descrip} class="avatar" />`;
}