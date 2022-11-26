export default class Colas {
  constructor(numberA, numberS, numberN = 0) {
    this.A = numberA;
    this.S = numberS;
    this.N = numberN;
    this.Lqn = 0;
  }
  /// Longitud promedio de la línea
  Lq() {
    var result;
    result = (this.A * 2) / (2 * this.S * (this.S - this.A));
    console.log(result);
    // mandarla a algun lugar
  }
  /// Tiempo espera promedio
  Wq() {
    var result;
    result = this.A / (2 * this.S * (this.S - this.A));
    console.log(result);
    // mandarla a algun lugar
  }
  /// Longitud promedio del sistema
  Ls() {
    var result;
    result =
      (this.A * (2 * this.S - this.A)) / (2 * this.S * (this.S - this.A));
    console.log(result);
    // mandarla a algun lugar
  }
  /// Tiempo espera promedio del sistema
  Ws() {
    var result;
    result = this.A / (2 * this.S * (this.S - this.A));
    console.log(result);
    // mandarla a algun lugar
  }
  /// Utilización de la instalación??? U
  U() {
    var result = this.A / this.S;
    console.log(result);
  }
  // ! ----------------Colas servidores -----------------------
  LqServer() {
    // poner función (llamar otras si es para 2 o 3 servidores)

    if (N == 0) {
      return;
    } else if (N == 2) {
      // hacer algo
    } else if (N == 3) {
      // hacer algo
    } else {
      // hacer algo
    }
    this.Lqn = 30;
  }
}
