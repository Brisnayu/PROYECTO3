import "./Header.css";


export const Header = () => {
    return `
    <article class="article-header">

        
        <img class="logo" src="./public/icons/logo_hera.png" alt="logo-hera" />
        <button id="themeBtn"><img src="./public/icons/dark-mode.png" alt="logo-hera"/></button>      
        

        <section class="header-navbar">
            <label class="nav-label" for="hamburger">
                <img class="menu" src="./public/icons/menu-hamburguer.png" alt="icon-hamburguer" />
            </label>
            
            <input class="nav-input" type="checkbox" id="hamburger" />

            <nav class="navbar">
                    <ul class="nav-list">
                        <li><a class="dark-mode" href="#">Inicio</a></li>
                        <li><a class="dark-mode" href="#">Tecnologías</a></li>
                        <li><a class="dark-mode" href="#">Proyectos</a></li>
                    </ul>
            </nav>

            
        </section>     
  
    </article>

    `;
};


  
// const changeThemeText = () => {
//     const themeBtn = document.querySelector("#themeBtn");
//     if (themeBtn.innerText === "☀️") {
//       themeBtn.innerText = "🌑";
//     } else {
//       themeBtn.innerText = "☀️";
//     };
// };



    // <img src="./public/icons/instagram-light.png" alt="logo-hera" />
    // <img src="./public/icons/instagram-dark.png" alt="logo-hera" />
    // <img src="./public/icons/github-light.png" alt="logo-hera" />
    // <img src="./public/icons/github-dark.png" alt="logo-hera" />
    // <img src="./public/icons/linkedin-light.png" alt="logo-hera" />
    // <img src="./public/icons/linkedin-dark.png" alt="logo-hera" />