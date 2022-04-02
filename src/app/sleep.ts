import { Operation } from "./operation";

export class Sleep extends Operation {
  constructor(private ms: number) {
    super();
  }

  async run() {
    await new Promise((resolve) => setTimeout(resolve, this.ms));
  }

  public static randomized(min: number, max: number): Sleep {
    return new Sleep(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
