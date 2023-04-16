import './style.css';
import './src/components/Dark-mode/Dark-mode.css';

// Constantes
import { Header } from './src/components/Header/Header';
import { Lateral } from './src/components/Footer/Footer';

// Diferentes páginas
import { Home } from './src/pages/Home/Home';

// Funcionalidad 
import { changeTheme } from './src/components/Dark-mode/Dark-mode';
import { showContent } from './src/components/Footer/Footer';

document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Lateral();

Home();

changeTheme();
showContent();

