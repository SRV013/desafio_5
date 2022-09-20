type Jugada = "piedra" | "papel" | "tijera";
const state = {
   data: {
      elJuego: {
         miJugada: "",
         pcJugada: "",
      },
      history: {
         misPuntos: 0,
         cpuPuntos: 0,
         losEmpates: 0,
         todoLosResultados:"",
      },
   },

   getStorage() {
      const local = JSON.parse(localStorage.getItem("data") as string);
      if (localStorage.getItem("data")) {
         this.data.history = local;
      }
   },

   getState() {
      return this.data;
   },

   setState(nuevoEstado) {
      this.data = nuevoEstado;
   },

   setMove(move: Jugada) {
      const estadoActual = this.getState();
      estadoActual.elJuego.miJugada = move;
      const machineMove = () => {
         const manos = ["piedra","papel","tijera"];
         return manos[Math.floor(Math.random() * 3)];
      };
      estadoActual.elJuego.pcJugada = machineMove();
      this.setHistory();
   },

   whowins() {
      const estadoActual = this.getState();
      const jugada = estadoActual.elJuego;
      const empate = [
         jugada.miJugada == "tijera" && jugada.pcJugada == "tijera",
         jugada.miJugada == "piedra" && jugada.pcJugada == "piedra",
         jugada.miJugada == "papel" && jugada.pcJugada == "papel",
      ];
      if (empate.includes(true)) {
         return "empate";
      }
      const juego = [
         jugada.miJugada == "tijera" && jugada.pcJugada == "papel",
         jugada.miJugada == "piedra" && jugada.pcJugada == "tijera",
         jugada.miJugada == "papel" && jugada.pcJugada == "piedra",
      ];
      if (juego.includes(true)) {
         return "ganastes";
      } else {
         return "perdistes";
      }
   },

   setHistory() {
      const elGanador = this.whowins();
      const estadoActual = this.getState();
      const misPuntos = estadoActual.history.misPuntos;
      const cpuPuntos = estadoActual.history.cpuPuntos;
      const losEmpates = estadoActual.history.losEmpates;
      const todoLosResultados= estadoActual.history.todoLosResultados;
      
      if (elGanador == "ganastes") {
         this.setState({
            ...estadoActual,
            history: {
               misPuntos: misPuntos + 1,
               cpuPuntos: cpuPuntos,
               losEmpates: losEmpates,
               todoLosResultados:"ganastes" + todoLosResultados,
            },
         });
      }
      if (elGanador == "perdistes") {
         this.setState({
            ...estadoActual,
            history: {
               misPuntos: misPuntos,
               cpuPuntos: cpuPuntos + 1,
               losEmpates: losEmpates,
               todoLosResultados:"perfistes" + todoLosResultados,
            },
         });
      }
      if (elGanador == "empate") {
         this.setState({
            ...estadoActual,
            history: {
               misPuntos: misPuntos,
               cpuPuntos: cpuPuntos,
               losEmpates: losEmpates + 1,
               todoLosResultados:"empate" + todoLosResultados,
            },
         });
      }

      this.savedData();
   },

   savedData() {
      const estadoActual = this.getState().history;
      localStorage.setItem("data", JSON.stringify(estadoActual));
   },

   cleanData() {
      localStorage.setItem(
         "data",
         JSON.stringify({
            misPuntos: 0,
            cpuPuntos: 0,
            losEmpates: 0,
            todoLosResultados:"",
         })
      );
   },
};
export { state };