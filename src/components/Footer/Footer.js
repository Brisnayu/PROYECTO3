import "./Footer.css";

export const Footer = () => {
    return `
    <section class="contacts background-change">   

        <div class="location"> 
        
            <h3 id="text-location">Barcelona, España</h3>
            <button id="locationBtn"><img class="icon-footer" src="/icons/location.png" alt="icon-location" /></button>
       
        </div>

        <div class="email">

            <h3 id="text-email">brisnapaez25@gmail.com</h3>
            <button id="emailBtn"><img class="icon-footer" src="/icons/email.png" alt="icon-email" /></button>
        
        </div>

    </section> 

    <section class="rrss background-change">
        <button id="rrssBtn"><img src="/icons/rrss.png" alt="icon-rrss" /></button>
        <a href="https://github.com/Brisnayu" target="_blank" class="icon-rrss" ><img class="icon-footer" src="/icons/github.png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154" target="_blank" class="icon-rrss"><img class="icon-footer" src="/icons/linkedin.png" alt="icon-linkedin" /></a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank" class="icon-rrss"><img class="icon-footer" src="/icons/instagram.png" alt="icon-instagram" /></a>
    </section>

    <section class="rrss-movil">
        <a href="https://github.com/Brisnayu" target="_blank"><img src="/icons/github-movil.png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154" target="_blank"><img src="/icons/linkedin-movil.png" alt="icon-linkedin" /></a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank"><img src="/icons/instagram-movil.png" alt="icon-instagram" /></a>
        <a href="https://www.instagram.com/mini_hera_/" target="_blank"><img src="/icons/email-movil.png" alt="icon-instagram" /></a>
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

    const rrssList = document.querySelector(".rrss");
    const rrssBtn = document.querySelector("#rrssBtn");

    emailBtn.addEventListener("click", () => {
        textEmail.classList.toggle("mostrar");
    });

     locationBtn.addEventListener("click", () => {
        textLocation.classList.toggle("mostrar");
     });

     rrssBtn.addEventListener("click", () => {
        rrssList.classList.toggle("show-rrss");
     });
};


