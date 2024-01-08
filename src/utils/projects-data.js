export const technologies = {
  html: "/icons/html.png",
  css: "/icons/css-3.png",
  js: "/icons/javascript.png",
  react: "/icons/react.png",
  mongodb: "/icons/mongodb.png",
  nodejs: "/icons/node-js.png",
  nosql: "/icons/nosql.png",
};

export const projectsData = [
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558943/Imagenes%20Porfolio/img-proyecto1_pjokbq.png",
    title: "Proyecto 1",
    goal: "Landing page",
    description: `El principal objetivo de este proyecto es realizar una landing page. Implementé todo lo aprendido 
        en las clases de HTML y CSS, además tuve la oportunidad de practicar la maquetación y que sea una web responsive. 
        Fue un gran reto para mí, ya que era mi primer proyecto. En cuanto al diseño, obtuve la inspiración de una imagen.`,
    tech: ["html", "css"],
    link: "https://proyecto1-the-power-mba.netlify.app",
    github: "https://github.com/Brisnayu/PROYECTO1",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558946/Imagenes%20Porfolio/img-proyecto-aracari_o4jfid.png",
    title: "Proyecto Aracari",
    goal: "Landing page",
    description: `Este proyecto lo hice de manera personal, mi objetivo era mejorar una página ya existente, 
        de una manera sencilla implementando los conocimientos aprendidos de maquetación y css. En esta landing page, se verán
        diferentes criterios en cuanto a estilos.`,
    tech: ["html", "css"],
    link: "https://proyecto-aracari.netlify.app/",
    github: "https://github.com/Brisnayu/Creation-of-aracar-project",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558942/Imagenes%20Porfolio/img-proyecto1.1_kmsazt.png",
    title: "Proyecto 1.1",
    goal: "Landing page",
    description: `Este proyecto lo hice de manera personal, mi objetivo era mejorar considerablemente el diseño del proyecto anterior, 
        implementando diferentes métodos. La maquetación está realizada de manera muy similar, pero con cambios significativos 
        en cuanto a los estilos en CSS.`,
    tech: ["html", "css"],
    link: "https://proyecto1-1-the-power-mba.netlify.app",
    github: "https://github.com/Brisnayu/PROYECTO1.1",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558944/Imagenes%20Porfolio/img-proyecto-pantone_u00cvh.png",
    title: "Proyecto Pantone",
    goal: "Manejo conocimientos JS",
    description: `Para este proyecto, comencé a implementar conocimientos de JavaScript. Pude comenzar a prácticar algunos tipos de eventos,
        pudiendo implementar los cambios directamente en el HTML.`,
    tech: ["html", "css", "js"],
    link: "https://proyecto-pantone.netlify.app/",
    github: "https://github.com/Brisnayu/PROYECTO-COLORES-PANTONE",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558944/Imagenes%20Porfolio/img-proyecto-pokeapi_vcrgq9.png",
    title: "Proyecto PokeApi",
    goal: "Información API REST",
    description: `Primer proyecto implementando conocimientos de JavaScript para buscar información de una API REST. 
        En este caso, se hizo diferentes solicitudes a la Pokéapi, logrando extraer esa información por medio de dos filtros,
        el primero buscando el Pokemón según su nombre y el segundo según su ID. Se implementaron diferentes condiciones, como 
        por ejemplo, que no puedas buscar simultáneamente y que muestre un error si el nombre no corresponde a un Pokemón.`,
    tech: ["html", "css", "js"],
    link: "https://perfect-match-pokemon.netlify.app",
    github: "https://github.com/Brisnayu/PRIMERA-POKEAPI",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558943/Imagenes%20Porfolio/img-proyecto2_lijncz.png",
    title: "Proyecto 2",
    goal: "Tienda dinámica",
    description: `Para el segundo proyecto, el enfoque principal era hacer una tienda dinámica. Para implementar los conocimientos 
        aprendidos de JavaScript, los productos debían generarse en HTML de manera dinámica y tendríamos un filtro para que el 
        “cliente” pudiese ver los productos que solamente le interesaban. En este caso, me enfoque en que el filtro de 
        los productos de la “supuesta tienda” funcionara de manera correcta, sin importar la forma en que sean buscados. 
        Adicional a esto, agregue un mensaje para indicarle al usuario en caso de que no hubiera productos en el rango que hiciera la búsqueda.`,
    tech: ["html", "css", "js"],
    link: "https://proyecto2-the-power-mba.netlify.app",
    github: "https://github.com/Brisnayu/PROYECTO2",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558943/Imagenes%20Porfolio/img-proyecto3_s942em.png",
    title: "Proyecto 3",
    goal: "Creación portfolio",
    description: `En este proyecto, tuve la maravillosa oportunidad de crear mi propio portfolio 
        utilizando únicamente los conocimientos adquiridos en HTML, CSS y JavaScript. El proceso de crear 
        rutas y, sobre todo, los componentes, fue realmente enriquecedor. Además, aproveché la ocasión para 
        explorar y experimentar con animaciones, lo que ha dado vida y personalidad a la página. Estoy emocionada 
        de haber logrado un portfolio que refleje mi trabajo y habilidades de una manera creativa y atractiva.`,
    tech: ["html", "css", "js"],
    link: "https://portfolio-brisna-paez.netlify.app/",
    github: "https://github.com/Brisnayu/PROYECTO3",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558946/Imagenes%20Porfolio/img-proyecto4_aog3nc.png",
    title: "Proyecto 4",
    goal: "React App NASA",
    description: `Fue todo un reto realizar mi primer proyecto utilizando la librería de JavaScript React. Una 
        de las partes más desafiantes fue trabajar con las solicitudes a la API de la NASA, especialmente aquellas relacionadas 
        con el Mars Rover. Para abordar este desafío, utilicé la información proporcionada diariamente por la API. Además, 
        implementé la funcionalidad de crear dinámicamente botones correspondientes a las diferentes cámaras del Mars Rover, 
        lo que me permitió filtrar las imágenes de manera eficiente según las preferencias.`,
    tech: ["html", "css", "js", "react"],
    link: "https://proyecto4-nasa-brisna-paez.netlify.app/",
    github: "https://github.com/Brisnayu/PROYECTO4",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693558945/Imagenes%20Porfolio/img-proyecto5_zllcgp.png",
    title: "Proyecto 5",
    goal: "React App del tiempo",
    description: `Estoy emocionada por compartir mi experiencia al completar este proyecto. 
        Trabajar con la geolocalización ha sido increíblemente fascinante, y la integración de la API 
        del tiempo en la aplicación ha sido realmente interesante. Uno de los mayores desafíos que enfrenté 
        fue realizar una refactorización del código, creando componentes independientes y aprovechando al máximo 
        las capacidades de la librería de JavaScript React. Me enorgullece haber logrado un código más limpio y eficiente.`,
    tech: ["html", "css", "js", "react"],
    link: "https://proyecto5-brisna-paez.netlify.app/",
    github: "https://github.com/Brisnayu/PROYECTO5",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693650711/Imagenes%20Porfolio/imagen-proyecto-juegos.png",
    title: "Proyecto 6",
    goal: "React hub de juegos",
    description: `Lo que comenzó como una idea relativamente sencilla se convirtió en un desafío que superó todas mis expectativas, 
    poniendo a prueba mis habilidades y conocimientos de manera inesperada. Los juegos, a pesar de su aparente simplicidad inicial, 
    demostraron ser una prueba de mi capacidad para resolver problemas complejos y aplicar soluciones creativas. Cada línea de código 
    fue una oportunidad para aprender y crecer, y cada obstáculo superado me brindó una pequeña victoria personal.`,
    tech: ["html", "css", "js", "react"],
    link: "https://proyecto-juegos-brisna-paez.netlify.app/",
    github: "https://github.com/Brisnayu/Proyecto-MERN3",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1693651655/Imagenes%20Porfolio/img-proyecto-styled-components.png",
    title: "Proyecto 7",
    goal: "Styled Components",
    description: `Primer proyecto usando solamente Styled Components para la maquetación. Además se realizaron diferentes 
    test para así realizar comprobaciones de los diferentes elementos que se muestran en la página. Lo realmente interesante de 
    esta web, se encuentra en el código, con los diferentes elementos reutilizables y la manera de maquetar. Fue un proyecto muy 
    enriquecedor, ya que también utilicé componentes de MUI, lo que me motivó a investigar en la documentación la forma adecuada 
    de utilizar estos diversos elementos, algo con lo que no había tenido la oportunidad de interactuar previamente.`,
    tech: ["html", "css", "js", "react"],
    link: "https://proyecto-styled-components-brisna.netlify.app/",
    github: "https://github.com/Brisnayu/Proyecto-MERN4",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1696519058/Imagenes%20Porfolio/PROYECTO_1_BACKEND_zwqesa.png",
    title: "API rest",
    goal: "Servidor de Express con MongoDB",
    description: `Primer proyecto de BackEnd, se ha implementado la definición de un modelo de datos, donde cumplen con las cuatro 
    operaciones básicas de las bases de datos (CRUD), las cuales son Create (Crear), Read (Leer), Update (Actualizar) y Delete (Borrar). 
    La temática ha sido sobre gatitos, donde se podrían registrar, filtrar, crear, editar y borrar información. El código es 
    reutilizable a cualquier otro tema requerido.`,
    tech: ["js", "mongodb", "nodejs", "nosql"],
    github: "https://github.com/Brisnayu/Proyecto-MERN5",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1696524133/Imagenes%20Porfolio/PROYECTO_2_BACKEND_pgsbbx.png",
    title: "Modelado relacional",
    goal: "Servidor de Express con MongoDB, con modelos de datos relacionados",
    description: `El objetivo era replicar el modelo anterior (en el proyecto de API rest), en cuanto a las 
    operaciones básicas del CRUD, pero esta vez se tienen tres modelos de datos, los cuales están relacionados 
    relacionados entre sí. En el código se tenía la estructura para un modelo de gatitos, uno de perritos y por último 
    uno de cuidadores. Dentro de los datos de los cuidadores, se tendría información de las mascotas a su cargo, trayendo 
    datos de los modelos de gatitos o perritos según sea el caso.`,
    tech: ["js", "mongodb", "nodejs", "nosql"],
    github: "https://github.com/Brisnayu/Proyecto-MERN6",
  },
  {
    img: "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1696524951/Imagenes%20Porfolio/PROYECTO_3_BACKEND_fvzetg.png",
    title: "Servidor completo",
    goal: "API completa con despliegue en Vercel",
    description: `En esta ocasión, se tiene una API completa que te sumerge por completo en el apasionante mundo del 
    mobiliario y el diseño de interiores. A medida que te adentres en esta experiencia, descubrirás algunos diseñadores 
    de renombre y piezas de mobiliario icónicas que han dejado una marca indeleble en la historia de la decoración y el 
    interiorismo. Este proyecto no se detiene en lo simple, ha alcanzado metas más ambiciosas. En primer lugar, se ha implementado 
    un sistema de rutas protegidas, reservadas exclusivamente para usuarios que se hayan registrado previamente. El proceso de 
    registro otorga a los usuarios un JWT (Token JSON Web) con una vigencia de una hora, garantizando así la seguridad de la 
    plataforma. Además, se ha habilitado la función de carga de imágenes directamente a Cloudinary desde el backend, 
    brindando una experiencia aún más completa y eficiente.`,
    tech: ["js", "mongodb", "nodejs", "nosql"],
    link: "https://mern-7-brisnayu.vercel.app/api/designer",
    github: "https://github.com/Brisnayu/MERN7",
  },
];
