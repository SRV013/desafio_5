import { state } from "../../state";
state.getStorage();
export function init(params) {
   const div = document.createElement("div");
   div.classList.add("container");
   const style = document.createElement("style");
   div.innerHTML = `
   <div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  
   <div class="reglas-flecha">⬇</div>  
    <tipo-boton class="btn-click">reintentar</tipo-boton>
        <div class="tipos">
        <tipo-piedra class="piedra"></tipo-piedra>
        <tipo-papel class="papel"></tipo-papel>
        <tipo-tijera class="tijera"></tipo-tijera>
    </div>`;
   style.innerHTML = `
   .container {
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;
    flex-wrap: wrap;
    }
    .titulo {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      font-size:42px;
      text-align:center;
      color:var(--titulo-color);
    }
    .reglas {
        width: 100%;
        display: flex;
         justify-content: space-evenly;
           font-size: 18px;
      text-align: center;
      font-weight:300;
      font-family:monospace;
      color:var(--sub-titulo-color);
      }
    .reglas-flecha{
      font-size: 36px;
      position: relative;
      animation-name: anim;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
    @keyframes anim{
       0% {color: #40dcff;transform:translateY(1px);}
       25% {color: #40dcff;transform:translateY(2px);}
       50% {color: #40dcff;transform:translateY(4px);}
       75% {color: #ff85ff;transform:translateY(2px);}
       100% {color: #ff85ff;transform:translateY(1px);}
    }
    .tipos {
    display: flex;
		justify-content:center;
    }
    `;

   const button = div.querySelector(".btn-click") as Element;
   button.addEventListener("click", () => {
     params.goTo("/ppt/juegos");
   });
   div.appendChild(style);
   return div;
}