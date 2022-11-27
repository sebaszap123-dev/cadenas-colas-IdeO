export default class Colas {
  constructor(numberA, numberS, numberN = 0) {
    this.A = numberA;
    this.S = numberS;
    this.N = numberN;
    this.Lqn = 0;
    this.denominatorConstServ = this.S * 2 * (this.S - this.A);
    this.denominatorProbabilityRow = this.S * (this.S - this.A);
    this.denominatorProbabilitySystem = this.S - this.A;
  }
  // * ---------------- 1-1 probability -----------------------
  /// Longitud promedio de la línea
  ProbabilityLq() {
    var result;
    result = Math.pow(this.A, 2) / this.denominatorProbabilityRow;
    console.log(result);
    return result;
  }
  /// Tiempo espera promedio colas
  ProbabilityWq() {
    var result;
    result = this.A / this.denominatorProbabilityRow;
    return result;
  }
  /// Longitud promedio del sistema
  ProbabilityLs() {
    var result;
    result = this.A / this.denominatorProbabilitySystem;
    return result;
  }
  /// Tiempo espera promedio del sistema
  ProbabilityWs() {
    var result;
    result = 1 / this.denominatorProbabilitySystem;
    return result;
  }
  // * ---------------- 1-1 probability end-----------------------

  // ? ---------------- 1-1 servicios constantes-----------------------
  ServiciosLq() {
    var result = (this.A * 2) / this.denominatorConstServ;
    return result;
  }
  ServiciosWq() {
    var result = this.A / this.denominatorConstServ;
  }
  /// Longitud promedio del sistema
  ServiciosLs() {
    var result;
    result = (this.A * (2 * this.S - this.A)) / this.denominatorConstServ;
    console.log(result);
    // mandarla a algun lugar
  }
  /// Tiempo espera promedio del sistema
  ServiciosWs() {
    var result;
    result = (this.S * 2 - this.A) / this.denominatorConstServ;
    console.log(result);
    // mandarla a algun lugar
  }
  // ? ---------------- 1-1 servicios constantes end -----------------------

  // * ---------------- 1-1 Servidores (N=x)  -----------------------
  LqServer() {
    // poner función (llamar otras si es para 2 o 3 servidores)
    if (N == 1) {
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
  /// Longitud de colas N=x, x>1
  LqNxMultServ() {
    var powed = this.N + 1;
    var P0;
    var numerator = Math.pow(this.A / this.S, powed) * P0;
    var denominator;
    var result = numerator / denominator;
    return result;
  }
  /// ? Utilización de la instalación U
  Utility() {
    var result = this.A / this.S;
    console.log(result);
  }

  /// Servidores (multiples N=2)
  LqW2() {
    var first = Math.pow(this.A / this.S, 3);
    var second = 4 - Math.pow(this.A / this.S, 2);
    var result = first / second;
    return result;
  }
  WsW2() {
    var result = this.LqW2() / this.A;
    result = Number.parseFloat(result.toFixed(4));
    console.log(result);
    return result;
  }
  /// Servidores (multiples N=3)
  LqW3() {
    var first = Math.pow(this.A / this.S, 4);
    var second;
    var s1 = 3 - this.A / this.S;
    var s2 = 6 + (4 * this.A) / this.S;
    var s3 = Math.pow(this.A / this.S, 2);
    second = s1 * (s2 + s3);
    var result = first / second;
    console.log(result);
  }
}

function factorial(n) {
  var total = 1;
  for (i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}
