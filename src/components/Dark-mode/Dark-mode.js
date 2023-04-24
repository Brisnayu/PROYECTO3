const gradientPink = "invert(99%) sepia(19%) saturate(3512%) hue-rotate(299deg) brightness(98%) contrast(85%)";
const gradientBlue = "invert(27%) sepia(83%) saturate(265%) hue-rotate(164deg) brightness(95%) contrast(97%)";
const gradientLight = "invert(100%) sepia(78%) saturate(131%) hue-rotate(92deg) brightness(105%) contrast(95%)";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    const changeThemeText = document.querySelectorAll(".dark-mode");
    const changeBackground = document.querySelectorAll(".background-change");
    const gradient = document.querySelectorAll(".gradient");
    const changeIconsFooter = document.querySelectorAll(".icon-footer");
    const textSide = document.querySelectorAll("h3");
    const colorMenu = document.querySelector(".menu");
    const colorMovil = document.querySelectorAll(".rrss-movil img");

    const changeLogoDarkMode = document.getElementById("logo-moon-sun");

    // console.log(changeColorLinkIcon)

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        
        if (document.body.classList.value === "light") {
            changeLogoDarkMode.src = "./public/icons/light-mode.png"
            // console.log("estoy aquí")
        } else {
            changeLogoDarkMode.src = "./public/icons/dark-mode.png"
            // console.log("ahora estoy aquí")
        }
        
        
        // Cambiando el color de los textos
        changeThemeText.forEach(element => {
            if(element.style.color !== "var(--color-secundary)") {
                element.style.color = "var(--color-secundary)";
            } else {
                element.style.color = "var(--color-primary)";
            }  
        });

        // Laterales
        changeBackground.forEach(element => { 
            if (element.style.backgroundColor !== "var(--color-secundary)") {
                element.style.backgroundColor = "var(--color-secundary)";
            } else {
                element.style.backgroundColor = "var(--color-primary)";
            }
        });

        // Gradiente de color
        gradient.forEach(element => {
            if (element.className !== "new-gradient") {
                element.className = "new-gradient";
            } else {
                element.className = "gradient";
            }
        });

        // Cambio de color iconos del footer
        changeIconsFooter.forEach(element => {
            if(element.style.filter !== gradientLight) {
                element.style.filter = gradientLight;
            } else {
                element.style.filter = gradientBlue;
            }
        })

        // Cambio de color, texto del footer
        textSide.forEach(element => {
            if(element.style.color!== "var(--color-light)") {
                element.style.color = "var(--color-light)";
            } else {
                element.style.color = "var(--color-secundary)";
            }
        });

        if(colorMenu.style.filter !== gradientBlue) {
            colorMenu.style.filter = gradientBlue;
        } else {
            colorMenu.style.filter = gradientPink;
        }

        colorMovil.forEach(element => {
            if(element.style.filter !== gradientBlue){
                element.style.filter = gradientBlue;
            } else {
                element.style.filter = gradientPink;
            }
        });

    });
};

