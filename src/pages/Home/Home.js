import "./Home.css";
import { Avatar } from "../../components/Avatar/Avatar";

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="home">
    
        <div class="descrip">
            <h1 class="gradient">Brisna A. Páez M.</h1>
            <h2 class="dark-mode">Full Stack Developer Junior.</h2>
            <p class="dark-mode">I'm someone who enjoys being in constant motion, learning new technologies, and reinventing myself.</p>
            
        </div>
        <div class="image">
            ${Avatar("./images/avatar.jpg", "Avatar Brisna Paez")}
        </div>
    </section>
    `;
};