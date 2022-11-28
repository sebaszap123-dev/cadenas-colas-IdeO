import Colas from "../scripts/colas.js";
// import Mmultiply from "../scripts/mmult.js";
class App {
  // ! hacer que el pinche wey sepa que elija un solo valor factor (ejemplo: horas, minutos o segundos)
  constructor(A,S,max,min) {
    this.btnCalMul = document.getElementById('btnMul');
    this.btnCalMul.addEventListener("click", this.btnMul);
    this.btnCal1a1 = document.getElementById('btn1a1');
    this.btnCal1a1.addEventListener("click", this.btn1a1);
    this.tipoDato = "horas";
    this.maxColas = min;
    this.maxIterator = max;
    /// Tasa promedio de llegadas (por unidad de tiempo)
    this.A = A;
    /// Tasa promedio de servicio por servidor (por unidad de tiempo)
    this.S = S;
  }
  /// Colas multiples (por unidad de tiempo)
  btnMul = () => {
      //TOMA DATOS HTML
    console.log("hola");
    let A = Number(document.getElementById('A').value);
    let S = Number(document.getElementById('S').value);
    let max = Number(document.getElementById('Max').value);
    let min = Number(document.getElementById('Min').value);
    let product = new App(A, S, max, min);
    product.usarColasMult();
    document.getElementById("A").value = "";
    document.getElementById("S").value = "";
    document.getElementById("Max").value = "";
    document.getElementById("Min").value = "";
  }
  btn1a1 = () => {
      //TOMA DATOS HTML
    console.log("hola");
    let A = Number(document.getElementById('A2').value);
    let S = Number(document.getElementById('S2').value);
    let product = new App(A, S);
    console.log(A,S);
    product.usarColasProbability();
    product.usarColasServiciosConstants();
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
    var Lq = colas.LqNx();
    var Wq = colas.WqNx();
    var Ls = colas.LsNx();
    var Ws = colas.WsNx();
    var utility = colas.UtilityNx();

    var res = document.querySelector(".res");
    res.style.display = "block";
    let details=document.getElementById('details');
    details.innerHTML = `<b>Lq = </b> ${Lq}.<br><b>Wq = </b>${Wq}.<br><b>Ls =</b> ${Ls}.<br><b>Ws = </b>${Ws}.<br><b>Utilidad = </b>${utility}.<br>`;
  }
  /// Colas 1-1 probability
  usarColasProbability() {
    var colas = new Colas(this.A, this.S);
    var Lq =(colas.ProbabilityLq());
    var Wq =(colas.ProbabilityWq());
    var Ls =(colas.ProbabilityLs());
    var Ws =(colas.ProbabilityWs());
    var utility =(colas.Utility());

    var res = document.querySelector(".res");
    res.style.display = "block";
    let details=document.getElementById('details');
    details.innerHTML = `<b>Probabilidad:</b><br><b>Lq = </b> ${Lq}.<br><b>Wq = </b>${Wq}.<br><b>Ls =</b> ${Ls}.<br><b>Ws = </b>${Ws}.<br><b>Utilidad = </b>${utility}.<br>`;
  }
  /// Colas 1-1 servicios constantes
  usarColasServiciosConstants() {
    var colas = new Colas(this.A, this.S);
    var Lq = (colas.ServiciosLq());
    var Wq = (colas.ServiciosWq());
    var Ls = (colas.ServiciosLs());
    var Ws = (colas.ServiciosWs());
    var utility = (colas.Utility());

    var res = document.querySelector(".res");
    res.style.display = "block";
    let details=document.getElementById('details2');
    details.innerHTML = `<b>Servicios Constantes:</b><br><b>Lq = </b> ${Lq}.<br><b>Wq = </b>${Wq}.<br><b>Ls =</b> ${Ls}.<br><b>Ws = </b>${Ws}.<br><b>Utilidad = </b>${utility}.<br>`;
  }
}
var app = new App();

//app.usarColasProbability();

// referencia : https://www.studocu.com/es-mx/document/instituto-tecnologico-de-delicias/taller-de-etica/ejemplo-1-de-teoria-de-colas-ejercicios-resueltos/18027831
