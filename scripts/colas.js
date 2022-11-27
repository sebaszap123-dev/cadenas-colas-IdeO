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
  /// * ----------------- Utilización de la instalación U ------------------------
  Utility() {
    var result = this.A / this.S;
    return result;
  }
  // * ---------------- 1-1 Servidores (N=x)  -----------------------
  LqNx() {
    var result;
    if (this.N == 2) {
      result = this.LqW2();
    } else if (this.N == 3) {
      result = this.LqW3();
    } else {
      result = this.LqNxMultServ();
    }
    return result;
  }
  /// Longitud de colas N=x, x>1
  LqNxMultServ() {
    var powed = this.N + 1;
    var p0 = this.P0();
    var numerator = Math.pow(this.A / this.S, powed) * p0;
    var denominator =
      factorial(this.N - 1) * Math.pow(this.N - this.A / this.S, 2);
    var result = numerator / denominator;
    return result;
  }
  sumatoriaForP0(i) {
    var result = 1 / factorial(i);
    return result;
  }
  P0() {
    var s1 = 1 / factorial(this.N);
    var s2 = Math.pow(this.A / this.S, this.N);
    var s3 = (this.N * this.S) / (this.N * this.S - this.A);
    var s4 = sumatoria(this.N, this.sumatoriaForP0) * (this.A / this.S);
    var denominator = s1 * s2 * s3 + s4;
    var result = 1 / denominator;
    return result;
  }

  WqNx() {
    var result = this.LqNx() / this.A;
    return result;
  }
  LsNx() {
    var result = this.LqNx() + this.A * this.S;
    return result;
  }
  WsNx() {
    var result = this.LqNx() / this.A;
    return result;
  }
  UtilityNx() {
    var result = this.A / (this.N * this.S);
    return result;
  }

  /// * Servidores (multiples N=2)
  LqW2() {
    var first = Math.pow(this.A / this.S, 3);
    var second = 4 - Math.pow(this.A / this.S, 2);
    var result = first / second;
    return result;
  }
  /// * Servidores (multiples N=3)
  LqW3() {
    var first = Math.pow(this.A / this.S, 4);
    var second;
    var s1 = 3 - this.A / this.S;
    var s2 = 6 + (4 * this.A) / this.S;
    var s3 = Math.pow(this.A / this.S, 2);
    second = s1 * (s2 + s3);
    var result = first / second;
    return result;
  }
  // * ---------------- 1-1 Servidores (N=x) end -----------------------
}

function factorial(n) {
  var total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}
function sumatoria(n, f) {
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += f(i);
  }
  return sum;
}
