function t(t,n,e,o){Object.defineProperty(t,n,{get:e,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},a=n.parcelRequire7796;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in o){var n=o[t];delete o[t];var a={id:t,exports:{}};return e[t]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,n){o[t]=n},n.parcelRequire7796=a),a.register("27Lyk",(function(n,e){var o,a;t(n.exports,"register",(()=>o),(t=>o=t)),t(n.exports,"resolve",(()=>a),(t=>a=t));var s={};o=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)s[n[e]]=t[n[e]]},a=function(t){var n=s[t];if(null==n)throw new Error("Could not resolve bundle with id "+t);return n}})),a("27Lyk").register(JSON.parse('{"1LzKV":"index.7401b57b.js","7Nkwz":"piedra.2252eb32.svg","efEvF":"papel.4ee751b2.svg","72eu7":"tijera.0197a4b3.svg"}'));const s={data:{elJuego:{miJugada:"",pcJugada:""},history:{misPuntos:0,cpuPuntos:0,losEmpates:0,todoLosResultados:""}},getStorage(){const t=JSON.parse(localStorage.getItem("data"));localStorage.getItem("data")&&(this.data.history=t)},getState(){return this.data},setState(t){this.data=t},setMove(t){const n=this.getState();n.elJuego.miJugada=t;n.elJuego.pcJugada=["piedra","papel","tijera"][Math.floor(3*Math.random())],this.setHistory()},whowins(){const t=this.getState().elJuego;if(["tijera"==t.miJugada&&"tijera"==t.pcJugada,"piedra"==t.miJugada&&"piedra"==t.pcJugada,"papel"==t.miJugada&&"papel"==t.pcJugada].includes(!0))return"empate";return["tijera"==t.miJugada&&"papel"==t.pcJugada,"piedra"==t.miJugada&&"tijera"==t.pcJugada,"papel"==t.miJugada&&"piedra"==t.pcJugada].includes(!0)?"ganastes":"perdistes"},setHistory(){const t=this.whowins(),n=this.getState(),e=n.history.misPuntos,o=n.history.cpuPuntos,a=n.history.losEmpates,s=n.history.todoLosResultados;"ganastes"==t&&this.setState({...n,history:{misPuntos:e+1,cpuPuntos:o,losEmpates:a,todoLosResultados:"ganastes"+s}}),"perdistes"==t&&this.setState({...n,history:{misPuntos:e,cpuPuntos:o+1,losEmpates:a,todoLosResultados:"perfistes"+s}}),"empate"==t&&this.setState({...n,history:{misPuntos:e,cpuPuntos:o,losEmpates:a+1,todoLosResultados:"empate"+s}}),this.savedData()},savedData(){const t=this.getState().history;localStorage.setItem("data",JSON.stringify(t))},cleanData(){localStorage.setItem("data",JSON.stringify({misPuntos:0,cpuPuntos:0,losEmpates:0,todoLosResultados:""}))}};s.getStorage();const i=[{path:/\/inicio/,component:function(t){const n=document.createElement("div");n.classList.add("container");const e=document.createElement("style");return n.innerHTML='\n\t<div class="titulo">Piedra<br> Papel<br> o<br> Tijera !!! </div>  \n\t<div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  \n\t<div class="reglas-flecha">⬇</div>  \n   <tipo-boton class="btn-click">Jugar</tipo-boton>\n\t<div class="tipos">\n\t    <tipo-piedra></tipo-piedra>\n  \t    <tipo-papel></tipo-papel>\n\t\t<tipo-tijera></tipo-tijera>\n\t</div>',e.innerHTML="\n\t.container {\n\t\theight: 100vh;\n    \tpadding-top: 100px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t\tjustify-content: space-around;\n\t\talign-content: flex-start;\n\t\tflex-wrap: wrap;\n\t}\n\t.titulo {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\tfont-size:42px;\n\t\ttext-align:center;\n\t\tcolor:var(--titulo-color);\n\t}\n\t.reglas {\n\t    width: 100%;\n    \tdisplay: flex;\n   \t\tjustify-content: space-evenly;\n   \t    font-size: 18px;\n\t\ttext-align: center;\n\t\tfont-weight:300;\n\t\tfont-family:monospace;\n\t\tcolor:var(--sub-titulo-color);\n\t\t}\n\t.reglas-flecha{\n\t\tfont-size: 36px;\n\t\tposition: relative;\n\t\tanimation-name: anim;\n\t\tanimation-duration: 1s;\n\t\tanimation-iteration-count: infinite;\n\t}\n\t@keyframes anim{\n\t   0% {color: #40dcff;transform:translateY(1px);}\n\t   25% {color: #40dcff;transform:translateY(2px);}\n\t   50% {color: #40dcff;transform:translateY(4px);}\n\t   75% {color: #ff85ff;transform:translateY(2px);}\n\t   100% {color: #ff85ff;transform:translateY(1px);}\n\t}\n\t.tipos {\n\t\tdisplay: flex;\n\t\tjustify-content:center;\n\t\t\t}\t\n\t",n.querySelector(".btn-click").addEventListener("click",(()=>{t.goTo("/ppt/juegos")})),n.appendChild(e),n}},{path:/\/juegos/,component:function(t){const n=document.createElement("div");n.classList.add("container");const e=document.createElement("style");let o=5;const a=setInterval((()=>{o--;n.querySelector(".timer-el").textContent=String(o),o<1&&clearInterval(a)}),1e3);n.innerHTML=`\n   <div class="tipo-top">\n      <tipo-piedra class="piedra-top  tipo-top-bloqueado"></tipo-piedra>\n      <tipo-papel class="papel-top  tipo-top-bloqueado"></tipo-papel >\n      <tipo-tijera class="tijera-top  tipo-top-bloqueado"></tipo-tijera>\n   </div>\n    <div class="timer-el timer-el-a">${o}</div>\n    <div class="tipos">\n    <tipo-piedra class="piedra"></tipo-piedra>\n    <tipo-papel class="papel"></tipo-papel>\n    <tipo-tijera class="tijera"></tipo-tijera>\n    </div>\n    `,e.innerHTML="\n   .container {\n      height: 100vh;\n      padding-top: 100px;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-around;\n      align-content: space-around;\n      flex-wrap: wrap;\n    }\n    .timer-el {\n        width:200px;\n        height:200px;\n        border-radius:50%;\n        border:22px solid #5a5a5a;\n        display:flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        border-left-color:var(--boton-font);\n        border-right-color:var(--boton-font);\n    }    \n    .timer-el-a{\n        font-size: 100px;\n        color: var(--boton-font);        \n    }\n    .tipos {\n      display: flex;\n\t   justify-content:center;\n    } \n    .tipo-bloqueado{\n      transition: all 1s ease-in-out;\n      filter: blur(4px);\n   }\n   .tipo-activos {\n      display: inherit;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    .tipo-desactivos {\n      transform: translateY(30px);\n      transform: scale(0.5);\n    }\n    .tipo-top {\n      display: flex;\n\t   justify-content:center;\n    } \n    .tipo-top-bloqueado{\n      transition: all 1s ease-in-out;\n      filter: blur(4px);\n      transform: scale(0.7);\n   }\n   .tipo-top-activos {\n      display: inherit;\n      transform: translateY(80px);\n      transition: all 0.5s;\n      filter:none;\n    }";const i=n.querySelector(".tipos"),r=n.querySelector(".tijera"),l=n.querySelector(".piedra"),p=n.querySelector(".papel"),c=n.querySelector(".piedra-top"),d=n.querySelector(".papel-top");for(const t of i.children)t.addEventListener("click",(()=>{const n=t.getAttribute("class");clearInterval(a),"tijera"==n?(s.setMove("tijera"),u("tijera")):"piedra"==n?(s.setMove("piedra"),u("piedra")):"papel"==n&&(s.setMove("papel"),u("papel"))}));function u(n){for(const t of i.children)t.classList.add("tipo-desactivos");"tijera"==n&&(r.classList.add("tipo-activos"),r.classList.remove("tipo-desactivos"),l.classList.add("tipo-bloqueado"),p.classList.add("tipo-bloqueado")),"piedra"==n&&(l.classList.add("tipo-activos"),l.classList.remove("tipo-desactivos"),r.classList.add("tipo-bloqueado"),p.classList.add("tipo-bloqueado")),"papel"==n&&(p.classList.add("tipo-activos"),p.classList.remove("tipo-desactivos"),r.classList.add("tipo-bloqueado"),l.classList.add("tipo-bloqueado")),setTimeout((()=>{const n=s.getState().elJuego.pcJugada;"tijera"==n&&c.classList.add("tipo-top-activos"),"piedra"==n&&c.classList.add("tipo-top-activos"),"papel"==n&&d.classList.add("tipo-top-activos"),setTimeout((()=>{t.goTo("/ppt/resultados")}),1500)}),1e3)}return n.appendChild(e),n}},{path:/\/reintentar/,component:function(t){const n=document.createElement("div");n.classList.add("container");const e=document.createElement("style");return n.innerHTML='\n   <div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  \n   <div class="reglas-flecha">⬇</div>  \n    <tipo-boton class="btn-click">reintentar</tipo-boton>\n        <div class="tipos">\n        <tipo-piedra class="piedra"></tipo-piedra>\n        <tipo-papel class="papel"></tipo-papel>\n        <tipo-tijera class="tijera"></tipo-tijera>\n    </div>',e.innerHTML="\n   .container {\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    align-content: flex-start;\n    flex-wrap: wrap;\n    }\n    .titulo {\n      width: 100%;\n      display: flex;\n      justify-content: space-evenly;\n      font-size:42px;\n      text-align:center;\n      color:var(--titulo-color);\n    }\n    .reglas {\n        width: 100%;\n        display: flex;\n         justify-content: space-evenly;\n           font-size: 18px;\n      text-align: center;\n      font-weight:300;\n      font-family:monospace;\n      color:var(--sub-titulo-color);\n      }\n    .reglas-flecha{\n      font-size: 36px;\n      position: relative;\n      animation-name: anim;\n      animation-duration: 1s;\n      animation-iteration-count: infinite;\n    }\n    @keyframes anim{\n       0% {color: #40dcff;transform:translateY(1px);}\n       25% {color: #40dcff;transform:translateY(2px);}\n       50% {color: #40dcff;transform:translateY(4px);}\n       75% {color: #ff85ff;transform:translateY(2px);}\n       100% {color: #ff85ff;transform:translateY(1px);}\n    }\n    .tipos {\n    display: flex;\n\t\tjustify-content:center;\n    }\n    ",n.querySelector(".btn-click").addEventListener("click",(()=>{t.goTo("/ppt/juegos")})),n.appendChild(e),n}},{path:/\/resultados/,component:function(t){const n=document.createElement("div");n.className="resultado-datos",n.classList.add("container");const e=s.whowins(),o=document.createElement("style");"ganastes"==e&&(o.innerHTML='.resultados::before { content: "😃";} .resultados{color:var(--font-gana)}'),"perdistes"==e?o.innerHTML='.resultados::before {content: "😡";} .resultados{color:var(--font-pierde)}':"empate"==e&&(o.innerHTML='.resultados::before {content: "🤔";} .resultados{color:var(--font-empate)}');const a=s.getState();n.innerHTML=`\n  <div class="tablero">\n  <h4>Marcador</h4>\n  <p class="maquina">CPU: ${a.history.cpuPuntos}</p>\n  <p class="vos">Tus triunfos: ${a.history.misPuntos}</p>\n  <p class="empates">Empates: ${a.history.losEmpates}</p>\n  <h3 class="btn-mostrar">ver marcador</h3>\n  </div>\n  <div class="resultados">\n   <h1>${e}</h1> \n </div>\n   <tipo-boton class="btn-volver">Continuar Jugando</tipo-boton>\n   <tipo-boton class="btn-inicio">Salir</tipo-boton>\n   `,n.querySelector(".btn-volver").addEventListener("click",(()=>{t.goTo("/ppt/juegos")})),n.querySelector(".btn-mostrar").addEventListener("click",(()=>{t.goTo("/ppt/marcador")})),n.querySelector(".btn-inicio").addEventListener("click",(()=>{s.cleanData(),s.getStorage(),t.goTo("/ppt/inicio")}));const i=document.createElement("style");return i.innerHTML="\n.container {\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    }\n  .tablero {\n      color: var(--resultados-font);\n      background: var(--resultados-fondo);\n      display: flex;\n      border: 2px solid var(--resultados-borde);\n      border-radius: 8px;\n    flex-direction: column;\n    padding:10px 60px 10px 60px;\n    font-family:monospace;\n  }\n  .tablero > h4 {\n      font-size: 24px;\n      margin: 0 auto;\n      text-align: center;\n    }\n  .tablero > h3 {\n      font-size: 24px;\n      margin: 0 auto;\n      text-align: center;\n      color:blue;\n      padding-top:20px;\n    }\n    .tablero > h3:hover{\n      cursor:pointer;\n      transition:0.5s;\n      transform:scale(1.1);\n    }\n    .tablero > p {\n        margin: 10px 0px 0px 0;\n        font-size: 20px;\n        text-align: center;\n    }\n    .resultados {\n        display: flex;\n        width: 220px;\n        height: 220px;\n        border-radius: 50%;\n        font-family: monospace;\n        align-items: center;\n        justify-content: center;\n        align-content: space-around;\n        flex-direction: column;\n        box-shadow: 0px 0px 10px 10px white;\n        background-color:white;\n    }\n    .resultados > h1 {\n        font-size: 34px;\n        margin: 0 auto;\n        text-align: center;\n        font-family: 'Fredoka One';\n      }\n    .resultados::before{font-size:40px;}\n\n  ",n.appendChild(o),n.appendChild(i),n}},{path:/\/marcador/,component:function(t){const n=document.createElement("div");n.className="resultado-datos",n.classList.add("container");const e=s.getState();n.innerHTML=`\n    <div class="tablero">\n    <h4>Marcador</h4>\n    <p class="maquina">CPU: ${e.history.cpuPuntos}</p>\n    <p class="vos">Tus triunfos: ${e.history.misPuntos}</p>\n    <p class="empates">Empates: ${e.history.losEmpates}</p>\n    <h3>Ultimas Jugadas</h3>\n    <p>${e.history.todoLosResultados}</p>\n    </div>\n     <tipo-boton class="btn-borrar">Borrar Marcador</tipo-boton>\n     <tipo-boton class="btn-volver">Volver</tipo-boton>\n     `;const o=document.createElement("style");return o.innerHTML="\n.container {\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    }\n    .tablero {\n        color: var(--resultados-font);\n        background: var(--resultados-fondo);\n        display: flex;\n        border: 2px solid var(--resultados-borde);\n        border-radius: 8px;\n      flex-direction: column;\n      padding:10px 60px 10px 60px;\n      font-family:monospace;\n      max-height:550px;\n      overflow: scroll;\n    }\n    .tablero > h4 {\n        font-size: 24px;\n        margin: 0 auto;\n        text-align: center;\n      }\n      .tablero > p {\n          margin: 10px 0px 0px 0;\n          font-size: 20px;\n          text-align: center;\n      }\n      .tablero > h3 {\n        font-size: 20px;\n        padding:0 20px ;\n        text-align: center;\n        background:var(--boton-fondo);\n      }\n      \n      ",n.querySelector(".btn-borrar").addEventListener("click",(()=>{s.cleanData(),s.getStorage(),t.goTo("/ppt/juegos")})),n.querySelector(".btn-volver").addEventListener("click",(()=>{t.goTo("/ppt/juegos")})),n.appendChild(o),n}}];function r(){return location.host.includes("github.io")}var l;l=new URL(a("27Lyk").resolve("7Nkwz"),import.meta.url).toString(),customElements.define("tipo-piedra",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const t=document.createElement("style");this.shadow.innerHTML=`\n            <img class="tipo-piedra" src="${l}">\n        `,t.innerHTML="\n            .tipo-piedra {\n              height:80%;\n              width:80%;\n            }\n            .tipo-piedra:hover{\n               transition: 0.20s;\n               transform: rotate(45deg);\n               cursor:pointer;\n            }\t\n        ",this.shadow.appendChild(t)}});var p;p=new URL(a("27Lyk").resolve("efEvF"),import.meta.url).toString(),customElements.define("tipo-papel",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const t=document.createElement("style");this.shadow.innerHTML=`\n            <img class="tipo-papel" src="${p}">\n        `,t.innerHTML="\n            .tipo-papel {\n              height: 80%;\n              width:80%;\n            }\n            .tipo-papel:hover{\n               transition: 0.20s;\n               transform: rotate(45deg);\n               cursor:pointer;\n            }\t\n        ",this.shadow.appendChild(t)}});var c;c=new URL(a("27Lyk").resolve("72eu7"),import.meta.url).toString(),customElements.define("tipo-tijera",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const t=document.createElement("style");this.shadow.innerHTML=`\n            <img class="tipo-tijera" src="${c}">\n        `,t.innerHTML="\n            .tipo-tijera {\n              height:80%;\n              width:80%;\n            }\n            .tipo-tijera:hover{\n               transition: 0.20s;\n               transform: rotate(45deg);\n               cursor:pointer;\n            }\t\n        ",this.shadow.appendChild(t)}}),customElements.define("tipo-boton",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const t=document.createElement("button"),n=document.createElement("style");t.className="boton-el",n.innerHTML="\n         .boton-el {\n            color: var(--boton-font);\n            height: 80px;\n            font-size: 34px;\n            text-align: center;\n            border-radius: 10px;\n            text-transform: uppercase;\n            background: var(--boton-fondo);\n            border:5px solid var(--boton-borde);\n            padding:0px 50px 0px 50px;\n            font-family:Fredoka One;\n         }\n         .boton-el:hover{\n            transition: 0.25s;\n            transform: scale(1.2);\n            cursor: pointer;\n         }",t.textContent=this.textContent,this.shadow.appendChild(t),this.shadow.appendChild(n)}}),function(t){function n(t){const n=r()?"/juego-ppt"+t:t;history.pushState({},"",n),e(n)}function e(e){const o=r()?e.replace("/juego-ppt",""):e;for(const e of i)if(e.path.test(o)){const o=e.component({goTo:n});t.firstChild&&t.firstChild.remove(),t.appendChild(o)}}location.host.includes("github.io")||"/"==location.pathname?n("/inicio"):e(location.pathname),window.onpopstate=function(){e(location.pathname)}}(document.querySelector(".root"));
//# sourceMappingURL=index.7401b57b.js.map
