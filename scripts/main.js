import Colas from "./colas.js";
import Mmultiply from "./mmult.js";
class App {
  // ! hacer que el pinche wey sepa que elija un solo valor factor (ejemplo: horas, minutos o segundos)
  constructor() {
    this.tipoDato = "horas";
    this.maxColas = 2;
    this.maxIterator = 10;
    /// Tasa promedio de llegadas (por unidad de tiempo)
    this.A = 2;
    /// Tasa promedio de servicio por servidor (por unidad de tiempo)
    this.S = 3;
  }
  /// Colas multiples (por unidad de tiempo)
  usarColasMult() {
    var colas = new Colas();
    console.log(this.maxColas);
    if (this.maxColas < 2) {
      console.log("ERROR");
      return;
      // ! sweet alert estas wey no se puede de 1 con colas multiples
    } else {
      for (let i = 2; i <= this.maxIterator; i++) {
        colas = new Colas(this.A, this.S, i);
        var compare = colas.LqNx();
        if (this.maxColas > compare) {
          this.maxIterator = i;
        }
      }
    }
    console.log(colas.LqNx());
    console.log(colas.WqNx());
    console.log(colas.LsNx());
    console.log(colas.WsNx());
    console.log(colas.UtilityNx());
  }
  /// Colas 1-1 probability
  usarColasProbability() {
    var colas = new Colas(this.A, this.S);
    console.log("Lq");
    console.log(colas.ProbabilityLq(), this.tipoDato);
    console.log("Wq");
    console.log(colas.ProbabilityWq(), this.tipoDato);
    console.log("Ls");
    console.log(colas.ProbabilityLs(), this.tipoDato);
    console.log("Ws");
    console.log(colas.ProbabilityWs(), this.tipoDato);
    console.log("Utility");
    console.log(colas.Utility(), this.tipoDato);
  }
  /// Colas 1-1 servicios constantes
  usarColasServiciosConstants() {
    var colas = new Colas(this.A, this.S);
    console.log("Lq");
    console.log(colas.ServiciosLq(), this.tipoDato);
    console.log("Wq");
    console.log(colas.ServiciosWq(), this.tipoDato);
    console.log("Ls");
    console.log(colas.ServiciosLs(), this.tipoDato);
    console.log("Ws");
    console.log(colas.ServiciosWs(), this.tipoDato);
    console.log("Utility");
    console.log(colas.Utility(), this.tipoDato);
  }
}

var app = new App();
app.usarColasProbability();
// referencia : https://www.studocu.com/es-mx/document/instituto-tecnologico-de-delicias/taller-de-etica/ejemplo-1-de-teoria-de-colas-ejercicios-resueltos/18027831
