import { init as initInicio} from "./pages/inicio";
import { init as initReintentar} from "./pages/reintentar";
import { init as initJuegos} from "./pages/juegos";
import { init as initResultados} from "./pages/resultados";
import { init as initMArcador} from "./pages/marcador";
const routes = [
    {
       path: /\/inicio/,
       component: initInicio,
    },
     {
        path: /\/juegos/,
        component: initJuegos,
     },
     {
        path: /\/reintentar/,
        component: initReintentar,
     },
     {
        path: /\/resultados/,
        component: initResultados,
     },
     {
        path: /\/marcador/,
        component: initMArcador,
     },
 ];

export function initRouter(container: Element) {
    function goTo(path) {
       history.pushState({}, "", path);
       handleRoute(path);
    }
 
    function handleRoute(route) {
       container.innerHTML = ``;
       routes.find((r) => {
          if (r.path.test(route)) {
             const el = r.component({ goTo: goTo });
             container.appendChild(el);
          }
       });
    }
    goTo('/juego-ppt//inicio')
    handleRoute(location.pathname);
} 