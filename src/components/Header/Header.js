import "./Header.css";


export const Header = () => {
    return `
    <article class="article-header">

        
        <img class="logo" id="logolink" src="/icons/logo_hera.png" alt="logo-hera" />
        <button id="themeBtn"><img src="/icons/dark-mode.png" alt="logo-dark-mode" id="logo-moon-sun"/></button>
    
        
        <section class="header-navbar">
            <label class="nav-label" for="hamburger">
                <img class="menu" src="/icons/menu-hamburguer.png" alt="icon-hamburguer" />
            </label>
            
            <input class="nav-input" type="checkbox" id="hamburger" />

            <nav class="navbar">
                    <ul class="nav-list">
                        <li><a class="dark-mode" href="#" id="homelink">Home</a></li>
                        <li><a class="dark-mode" href="#" id="aboutmelink">About me</a></li>
                        <li><a class="dark-mode" href="#" id="projectlink">Projects</a></li>
                    </ul>
            </nav>

            
        </section>     
  
    </article>

    `;
};