import { state } from "../../state";
export function init(params) {
   const div = document.createElement("div");
   div.classList.add("container");
   const style = document.createElement("style");
   let counter = 5;
   const contadorTime = setInterval(() => {
      counter--;
      const counterEl = div.querySelector(".timer-el") as Element;
      counterEl.textContent = String(counter);
      if (counter < 1) {
         clearInterval(contadorTime);
         params.goTo("/ppt/reintentar");
      }
   }, 1000)

   div.innerHTML = `
   <div class="tipo-top">
      <tipo-piedra class="piedra-top  tipo-top-bloqueado"></tipo-piedra>
      <tipo-papel class="papel-top  tipo-top-bloqueado"></tipo-papel >
      <tipo-tijera class="tijera-top  tipo-top-bloqueado"></tipo-tijera>
   </div>
    <div class="timer-el timer-el-a">${counter}</div>
    <div class="tipos">
    <tipo-piedra class="piedra"></tipo-piedra>
    <tipo-papel class="papel"></tipo-papel>
    <tipo-tijera class="tijera"></tipo-tijera>
    </div>
    `;
   style.innerHTML = `
   .container {
      height: 100vh;
      padding-top: 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      flex-wrap: wrap;
    }
    .timer-el {
        width:200px;
        height:200px;
        border-radius:50%;
        border:22px solid #5a5a5a;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-left-color:var(--boton-font);
        border-right-color:var(--boton-font);
    }    
    .timer-el-a{
        font-size: 100px;
        color: var(--boton-font);        
    }
    .tipos {
      display: flex;
	   justify-content:center;
    } 
    .tipo-bloqueado{
      transition: all 1s ease-in-out;
      filter: blur(4px);
   }
   .tipo-activos {
      display: inherit;
      transform: translateY(-30px);
      transition: all 0.5s;
    }
    .tipo-desactivos {
      transform: translateY(30px);
      transform: scale(0.5);
    }
    .tipo-top {
      display: flex;
	   justify-content:center;
    } 
    .tipo-top-bloqueado{
      transition: all 1s ease-in-out;
      filter: blur(4px);
      transform: scale(0.7);
   }
   .tipo-top-activos {
      display: inherit;
      transform: translateY(80px);
      transition: all 0.5s;
      filter:none;
    }`;
// LEER CLASES
const tiposCont = div.querySelector(".tipos") as Element;
const tipotijera = div.querySelector(".tijera") as Element;
const tipopiedra = div.querySelector(".piedra") as Element;
const tipopapel = div.querySelector(".papel") as Element;
const tipopiedraTop = div.querySelector(".piedra-top") as Element;
const tipopapelTop = div.querySelector(".papel-top") as Element;
// PASA FUNCION A LO ELEGIDO POR EL USUARIO
for (const tipos of tiposCont.children) {
   tipos.addEventListener("click", () => {
   const type = tipos.getAttribute("class");
   clearInterval(contadorTime);
   if (type == "tijera") {
      state.setMove("tijera"); activetipos("tijera");
   } else if (type == "piedra") {
      state.setMove("piedra"); activetipos("piedra");
   } else if (type == "papel") {
      state.setMove("papel"); activetipos("papel");
   }
   });
}
// SELECCION DE LO ELEGIDO POR USUARIO
   function activetipos(param) {
      for (const tipo of tiposCont.children) {
         tipo.classList.add("tipo-desactivos");}
      if (param == "tijera") {
         tipotijera.classList.add("tipo-activos");
         tipotijera.classList.remove("tipo-desactivos");
         tipopiedra.classList.add("tipo-bloqueado");
         tipopapel.classList.add("tipo-bloqueado");}
      if (param == "piedra") {
         tipopiedra.classList.add("tipo-activos");
         tipopiedra.classList.remove("tipo-desactivos");
         tipotijera.classList.add("tipo-bloqueado");
         tipopapel.classList.add("tipo-bloqueado");}
      if (param == "papel") {
         tipopapel.classList.add("tipo-activos");
         tipopapel.classList.remove("tipo-desactivos");
         tipotijera.classList.add("tipo-bloqueado");
         tipopiedra.classList.add("tipo-bloqueado");}
// TIMER Q DISPARA A RESULTADO      
      setTimeout(() => {
         const movimientoCpu = state.getState().elJuego.pcJugada;         
         if (movimientoCpu == "tijera") {
            tipopiedraTop.classList.add("tipo-top-activos");}
         if (movimientoCpu == "piedra") {
            tipopiedraTop.classList.add("tipo-top-activos");}
         if (movimientoCpu == "papel") {
            tipopapelTop.classList.add("tipo-top-activos");}
         setTimeout(() => {
           params.goTo("/ppt/resultados");
         }, 1500);
      }, 1000);
   }
   div.appendChild(style);
   return div;
}