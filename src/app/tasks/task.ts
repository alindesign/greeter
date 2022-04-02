import { Operation } from "../operation";
import { Application } from "../application";

export class Task extends Operation {
  constructor(private task: Operation["run"]) {
    super();
  }

  public run(app: Application): Promise<void> | void {
    this.task(app);
  }
}
