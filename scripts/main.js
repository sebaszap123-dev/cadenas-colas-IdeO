import Colas from "./colas.js";
import Mmultiply from "./mmult.js";
class App {
  constructor() {
    this.appColas = new Colas(2, 3, 3);
  }
}
var a = [
    [0.6, 0.2, 0.2],
    [0.3, 0.5, 0.2],
    [0.3, 0.3, 0.4],
  ],
  b = [
    [0.6, 0.2, 0.2],
    [0.3, 0.5, 0.2],
    [0.3, 0.3, 0.4],
  ];

var app = new App();
// var m = new Mmultiply(a, b);
// m.example();
// app.appColas.Lq();
