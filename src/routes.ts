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
 const BASE_PATH = "/juego-ppt";
 function isGithubPages() {
   return location.host.includes("github.io");}
   export function initRouter(container: any) {
      function goTo(path) {
          const completePath = isGithubPages() ? BASE_PATH + path : path;
          history.pushState({}, "", completePath);
          handleRoute(completePath);
      }
      function handleRoute(route) {
          const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;  
          for (const r of routes) {
              if (r.path.test(newRoute)) {
                  const el: any = r.component({ goTo: goTo });
                  if (container.firstChild) {
                      container.firstChild.remove();
                  }
                  container.appendChild(el);
              }
          }
  
      }
      if (location.host.includes("github.io")) {
          goTo("/inicio");
      } else if (location.pathname == "/") {
          goTo("/inicio");
      } else {
          handleRoute(location.pathname)
      }
      window.onpopstate = function () {
          handleRoute(location.pathname);
      }
} 