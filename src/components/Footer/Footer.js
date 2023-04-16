import "./Footer.css";

export const Lateral = () => {
    return `
    <section class="contacts background-change">   

        <div class="location"> 
        
            <h3 id="text-location">Barcelona, España</h3>
            <button id="locationBtn"><img class="icon-footer" src="./public/icons/location.png" alt="icon-location" /></button>
       
        </div>

        <div class="email">

            <h3 id="text-email">brisnapaez25@gmail.com</h3>
            <button id="emailBtn"><img class="icon-footer" src="./public/icons/email.png" alt="icon-email" /></button>
        
        </div>

    </section> 

    <section class="rrss background-change">
        <button id="rrssBtn"><img src="./public/icons/rrss.png" alt="icon-rrss" /></button>
        <a href="https://github.com/Brisnayu" target="_blank" class="icon-rrss" ><img class="icon-footer" src="./public/icons/github.png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154" target="_blank" class="icon-rrss"><img class="icon-footer" src="./public/icons/linkedin.png" alt="icon-linkedin" /></a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank" class="icon-rrss"><img class="icon-footer" src="./public/icons/instagram.png" alt="icon-instagram" /></a>
    </section>

    <section class="rrss-movil">
        <a href="https://github.com/Brisnayu" target="_blank"><img src="./public/icons/github-movil.png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154" target="_blank"><img src="./public/icons/linkedin-movil.png" alt="icon-linkedin" /></a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank"><img src="./public/icons/instagram-movil.png" alt="icon-instagram" /></a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank"><img src="./public/icons/email-movil.png" alt="icon-instagram" /></a>
    </section>

    <section class="reserved"> 
        <p class="dark-mode">Created by <span class="gradient">Brisna Paez</span> 2023 at Rock {TheCode}</p>
    </section>
`
}


export const showContent = () => {
    const emailBtn = document.querySelector("#emailBtn");
    const locationBtn = document.querySelector("#locationBtn");
    const textEmail = document.querySelector("#text-email");
    const textLocation = document.querySelector("#text-location");

    const rrssBtn = document.querySelector("#rrssBtn");
    const iconrrss = document.querySelectorAll(".icon-rrss");


    emailBtn.addEventListener("click", () => {
        console.log('CORREO ELECTRÓNICO')

        if (textEmail.style.display !== "block") {
            textEmail.style.display = "block"; 
        } else {
            textEmail.style.display = "none";
        }
    });

     locationBtn.addEventListener("click", () => {
        console.log('UBICACIÓN')
        if (textLocation.style.display !== "block") {
            textLocation.style.display = "block"; 
        } else {
            textLocation.style.display = "none";
        }

     });

     rrssBtn.addEventListener("click", () => {
        console.log('RRSS')

        iconrrss.forEach(icon => { 
            if (icon.style.display!== "block") {
                icon.style.display = "block";
            } else {
                icon.style.display = "none";
        }});
     });
};


