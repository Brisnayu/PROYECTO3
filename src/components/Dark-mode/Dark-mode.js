const gradientPink = "invert(100%) sepia(15%) saturate(1135%) hue-rotate(158deg) brightness(103%) contrast(95%)";
const gradientBlue = "invert(27%) sepia(83%) saturate(265%) hue-rotate(164deg) brightness(95%) contrast(97%)";

export const changeTheme = () => {
    const themeBtn = document.querySelector("#themeBtn");
    const changeThemeText = document.querySelectorAll(".dark-mode");
    const changeBackground = document.querySelectorAll(".background-change");
    const gradient = document.querySelectorAll(".gradient");
    const changeIconsFooter = document.querySelectorAll(".icon-footer");
    const textSide = document.querySelectorAll("h3");
    const colorMenu = document.querySelector(".menu");
    const colorMovil = document.querySelectorAll(".rrss-movil img");

    // console.log(gradient)
console.log(colorMovil)

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        
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
            if(element.style.filter !== gradientPink) {
                element.style.filter = gradientPink;
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

         

        

    //   changeThemeText();
      console.log('estoy haciendo click')

    });
};

// export const changeTheme = () => {
//     const themeBtn = document.querySelector("#themeBtn");
//     const elementLista = document.querySelectorAll(".lista");
//     const contacts = document.querySelector(".contacts");
//     const iconsCambi = document.querySelectorAll(".icon-footer");
//     const todosh3 = document.querySelectorAll("h3");

//     const prueba2 = document.querySelectorAll("li > a");

//     console.log('aquí están los li', prueba2)

//     themeBtn.addEventListener("click", () => {
//         document.body.classList.toggle("light");
        
//         elementLista.forEach(element => {
//             element.classList.toggle("light");
//         })
        
//         todosh3.forEach(element => {
//             element.style.color = "var(--color-primary)";

//         })

//         contacts.classList.toggle("invertir");

//         iconsCambi.forEach(element => {
//             if(element.style.filter !== "invert(78%) sepia(7%) saturate(1569%) hue-rotate(336deg) brightness(108%) contrast(82%)") {
//                 element.style.filter = "invert(78%) sepia(7%) saturate(1569%) hue-rotate(336deg) brightness(108%) contrast(82%)";
//             } else {
//                 element.style.filter = "invert(27%) sepia(83%) saturate(265%) hue-rotate(164deg) brightness(95%) contrast(97%)";
//             }
//         })
        

//         console.log(iconsCambi);

        

//     //   changeThemeText();
//       console.log('estoy haciendo click')
//       console.log(elementLista)
//     });
// };