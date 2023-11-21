//---- SCROOL

const scrollIntoViewSmooth = (elemento)=>{
    elemento.scrollIntoView({behavior:"smooth"});
};

let inicioBtn = document.getElementById("a_s-btn");
let inicio = document.querySelector(".section-2");

let servicioBtn = document.getElementById("servicio-btn");
let servicio = document.querySelector(".section-3");

let proyectosBtn = document.getElementById("proyectos-btn");
let proyectos = document.querySelector(".section-4");

let contactoBtn = document.getElementById("contacto-btn");
let contacto = document.querySelector(".footer");

inicioBtn.addEventListener("click", () => scrollIntoViewSmooth(inicio));
servicioBtn.addEventListener("click", () => scrollIntoViewSmooth(servicio));
proyectosBtn.addEventListener("click", () => scrollIntoViewSmooth(proyectos));
contactoBtn.addEventListener("click", () => scrollIntoViewSmooth(contacto));

// -----MENU

let bars = document.querySelector(".btn-content");
let responsive = document.querySelector(".responsive");

bars.addEventListener("click",()=>{
    if(responsive.style.display=='none'){
        responsive.style.display="block";
    } else{
        responsive.style.display="none";
    }
});

//-----------------SCROOL ANIMATION-------------//

// let section1 = document.querySelector('.section-1');

// section1.addEventListener('scroll', ()=>{
//     let elementoOculto = document.querySelector('');
//     let distanciaSuperior = elementoOculto.getBoundingClientRect().top;
//     let alturaVentana = window.innerHeight;

//     if (distanciaSuperior<alturaVentana) {
//         elementoOculto.style.display = 'block';
//     }
// });



//-----DESPLAZAMIENTO DE LA BARRA

const des = (elemento)=>{
    elemento.scrollIntoView({behavior:"smooth"});
    responsive.style.display="none";
}

let menuInicio = document.getElementById("menu_inicio-btn");
let menuServicio = document.getElementById("menu_servicio-btn");
let menuProyectos = document.getElementById("menu_proyectos-btn");
let menuContacto = document.getElementById("menu_contacto-btn");

menuInicio.addEventListener("click", ()=>des(inicio));
menuServicio.addEventListener("click", ()=>des(servicio));
menuProyectos.addEventListener("click",()=>des(proyectos));
menuContacto.addEventListener("click",()=>des(contacto));

//MIN PAG, PAG EST

let minPag = document.getElementById("minipag-click");
let pagEst = document.getElementById('paginadeinicio-click');

let minPagImg = document.getElementById("minipag-img");
let pagEstImg = document.getElementById('paginadeinicio-img');

const pagMinEst = (r,s)=>{
    r.addEventListener("mouseenter", ()=>{
        s.style.transform = "scale(1.1)";
    });
    r.addEventListener("mouseleave", ()=>{
        s.style.transform = "scale(1)";
    });
}

pagMinEst(minPag,minPagImg);
pagMinEst(pagEst,pagEstImg);

//SCROOL MIN PAG, PAG EST

let minPagFooter = document.getElementById('minipag-click_footer');
let pagEstFooter = document.getElementById('paginadeinicio-click_footer');

let minPagDiv = document.getElementById('minipag-div');
let pagEstDiv = document.getElementById('paginadeinicio-div');

minPag.addEventListener("click", ()=>{minPagDiv.scrollIntoView({behavior:"smooth"});});
pagEst.addEventListener("click", ()=>{pagEstDiv.scrollIntoView({behavior:"smooth"});});

minPagFooter.addEventListener("click", ()=>{minPagDiv.scrollIntoView({behavior:"smooth"});});
pagEstFooter.addEventListener("click", ()=>{pagEstDiv.scrollIntoView({behavior:"smooth"});});

//PROYECTOS

let negociodiv = document.querySelector(".proyectos_div-1");
let negocioHover = document.getElementById("negocio-hover");

let restaurant = document.querySelector(".proyectos_div-2");
let restaurantimg = document.getElementById("restaurant-hover");

let inmobiliaria = document.querySelector('.proyectos_div-3');
let inmobiliariaImg = document.getElementById('inmobiliaria-hover');

let comercio = document.querySelector('.proyectos_div-4');
let comercioImg = document.getElementById('comercio-hover');

const hoverS = (r,s)=>{
    r.addEventListener("mouseenter", ()=>{ s.style.transform = "scale(1.1)";});
    r.addEventListener("mouseleave", ()=>{s.style.transform = "scale(1)"; });
}

hoverS(negociodiv,negocioHover);
hoverS(restaurant,restaurantimg);
hoverS(inmobiliaria,inmobiliariaImg);
hoverS(comercio,comercioImg);
