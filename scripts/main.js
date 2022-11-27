import Colas from "./colas.js";
import Mmultiply from "./mmult.js";
class App {
  // ! hacer que el pinche wey sepa que elija un solo valor factor (ejemplo: horas, minutos o segundos)
  constructor(A,S,max,min) {
    this.btnCalcular = document.getElementById('btnMul');
    this.btnCalcular.addEventListener("click", this.cy);
    this.tipoDato = "horas";
    this.maxColas =  min;
    this.maxIterator =  max;
    /// Tasa promedio de llegadas (por unidad de tiempo)
    this.A = A;
    /// Tasa promedio de servicio por servidor (por unidad de tiempo)
    this.S = S;
  }
  datos() {
    console.log(this.maxColas);
    console.log(this.tipoDato);
    console.log(this.A);
    console.log(this.S);
  }
  /// Colas multiples (por unidad de tiempo)
  cy()  {
      //TOMA DATOS HTML
  console.log("hola");
  let A = Number(document.getElementById('A').value);
  let S = Number(document.getElementById('S').value);
  let max = Number(document.getElementById('Max').value);
  let min = Number(document.getElementById('Min').value);
  let product = new App(A, S, max, min);
  product.datos();
  }
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
