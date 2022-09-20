
import { DividerClassKey } from "@mui/material";
import { state } from "../../state";

export function init(params) {
 const div = document.createElement("div");
 div.className = "resultado-datos";
 div.classList.add("container");
 const resultado = state.whowins();
 const estiloResul = document.createElement("style");
if (resultado == "ganastes") {
  estiloResul.innerHTML = `.resultados::before { content: "😃";} .resultados{color:var(--font-gana)}`;
}  if (resultado == "perdistes") {
  estiloResul.innerHTML = `.resultados::before {content: "😡";} .resultados{color:var(--font-pierde)}`;
 } else if (resultado == "empate") {
  estiloResul.innerHTML = `.resultados::before {content: "🤔";} .resultados{color:var(--font-empate)}`;
}
  const nuevoEstado = state.getState();
  div.innerHTML = `
  <div class="tablero">
  <h4>Marcador</h4>
  <p class="maquina">CPU: ${nuevoEstado.history.cpuPuntos}</p>
  <p class="vos">Tus triunfos: ${nuevoEstado.history.misPuntos}</p>
  <p class="empates">Empates: ${nuevoEstado.history.losEmpates}</p>
  <h3 class="btn-mostrar">ver marcador</h3>
  </div>
  <div class="resultados">
   <h1>${resultado}</h1> 
 </div>
   <tipo-boton class="btn-volver">Continuar Jugando</tipo-boton>
   <tipo-boton class="btn-inicio">Salir</tipo-boton>
   `;
   const buttonBack = div.querySelector(".btn-volver") as Element;
   buttonBack.addEventListener("click", () => {
       params.goTo("/ppt/juegos");
    });
    const buttonClean = div.querySelector(".btn-mostrar") as Element;
    buttonClean.addEventListener("click", () => {
    //   state.cleanData();
    //   state.getStorage();
       params.goTo("/ppt/marcador");
    });
    const buttonInicio = div.querySelector(".btn-inicio") as Element;
    buttonInicio.addEventListener("click", () => {
       state.cleanData();
       state.getStorage();
       params.goTo("/ppt/inicio");
    });
const style = document.createElement("style");
style.innerHTML = `
.container {
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    }
  .tablero {
      color: var(--resultados-font);
      background: var(--resultados-fondo);
      display: flex;
      border: 2px solid var(--resultados-borde);
      border-radius: 8px;
    flex-direction: column;
    padding:10px 60px 10px 60px;
    font-family:monospace;
  }
  .tablero > h4 {
      font-size: 24px;
      margin: 0 auto;
      text-align: center;
    }
  .tablero > h3 {
      font-size: 24px;
      margin: 0 auto;
      text-align: center;
      color:blue;
      padding-top:20px;
    }
    .tablero > h3:hover{
      cursor:pointer;
      transition:0.5s;
      transform:scale(1.1);
    }
    .tablero > p {
        margin: 10px 0px 0px 0;
        font-size: 20px;
        text-align: center;
    }
    .resultados {
        display: flex;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        font-family: monospace;
        align-items: center;
        justify-content: center;
        align-content: space-around;
        flex-direction: column;
        box-shadow: 0px 0px 10px 10px white;
        background-color:white;
    }
    .resultados > h1 {
        font-size: 34px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Fredoka One';
      }
    .resultados::before{font-size:40px;}

  `;
    div.appendChild(estiloResul);
    div.appendChild(style);
    return div;  
}
