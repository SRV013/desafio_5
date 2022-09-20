import { state } from "../../state";
export function init(params) {
    const div = document.createElement("div");
    div.className = "resultado-datos";
    div.classList.add("container");
    const nuevoEstado = state.getState();
    div.innerHTML = `
    <div class="tablero">
    <h4>Marcador</h4>
    <p class="maquina">CPU: ${nuevoEstado.history.cpuPuntos}</p>
    <p class="vos">Tus triunfos: ${nuevoEstado.history.misPuntos}</p>
    <p class="empates">Empates: ${nuevoEstado.history.losEmpates}</p>
    <h3>Ultimas Jugadas</h3>
    <p>${nuevoEstado.history.todoLosResultados}</p>
    </div>
     <tipo-boton class="btn-borrar">Borrar Marcador</tipo-boton>
     <tipo-boton class="btn-volver">Volver</tipo-boton>
     `;
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
      max-height:550px;
      overflow: scroll;
    }
    .tablero > h4 {
        font-size: 24px;
        margin: 0 auto;
        text-align: center;
      }
      .tablero > p {
          margin: 10px 0px 0px 0;
          font-size: 20px;
          text-align: center;
      }
      .tablero > h3 {
        font-size: 20px;
        padding:0 20px ;
        text-align: center;
        background:var(--boton-fondo);
      }
      
      `;

     const buttonClean = div.querySelector(".btn-borrar") as Element;
     buttonClean.addEventListener("click", () => {
       state.cleanData();
       state.getStorage();
        params.goTo("/ppt/juegos");
     });
     const buttonBack = div.querySelector(".btn-volver") as Element;
     buttonBack.addEventListener("click", () => {
         params.goTo("/ppt/juegos");
      });
     div.appendChild(style);
     return div;  
}