import express, { Express } from "express";

export class App {
  public app: Express;

  constructor() {
    this.app = express();
  }

  public listen(port: number = 3000) {
    this.app.listen()
  }
}
