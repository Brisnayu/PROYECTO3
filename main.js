import './style.css';
import './src/components/Dark-mode/Dark-mode.css';

// Constantes
import { Header } from './src/components/Header/Header';
import { Lateral } from './src/components/Footer/Footer';


// Diferentes páginas
import { Home } from './src/pages/Home/Home';
import { AboutMe } from './src/pages/About-me/About-me';

// Funcionalidad 
import { changeTheme } from './src/components/Dark-mode/Dark-mode';
import { showContent } from './src/components/Footer/Footer';
import { linkPage } from './src/utils/linkpage';


document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Lateral();

Home();


changeTheme();
showContent();

// Ejecutando los links
linkPage("#homelink", Home);
linkPage("#about-me", AboutMe);