import "./Home.css";
import { Avatar } from "../../components/Avatar/Avatar";

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="home">
    
        <div class="descrip">
            <h1 class="gradient">Brisna A. Páez M.</h1>
            <h2 class="dark-mode">Estudiante Full Stack Developer.</h2>
            <p class="dark-mode">Soy una persona que le gusta estar en cosntane movimiento, aprender nuevas tecnologías y reinventarme.</p>
            
        </div>
        <div class="image">
            ${Avatar("./public/images/avatar.jpg", "Avatar Brisna Paez")}
        </div>
    </section>
    `;
};