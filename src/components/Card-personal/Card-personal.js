import "./Card-personal.css";

export const cardPersonal = (icon, desc) => {
    return `
    <div class="card-personal">
        <img src="${icon}" alt="${desc}" />
        <p>${desc}</p>
    </div>
    `;
}