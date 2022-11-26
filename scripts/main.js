import Colas from "./colas.js";

class App {
  constructor() {
    this.appColas = new Colas(20, 10);
  }
}

var app = new App();
app.appColas.Lq();
