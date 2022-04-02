import { Operation } from "./operation";
import { OS } from "./os";
import { Console } from "./console";
import { Git } from "./git";

export class Application {
  private operations: Operation[] = [];
  public status: number = 0;
  public os = new OS();
  public git = new Git();

  constructor(public console: Console) {}

  public setStatus(status: number) {
    this.status = status;
    return this;
  }

  public push(...operations: Operation[]) {
    this.operations.push(...operations);
    return this;
  }

  public shift(): Operation | undefined {
    return this.operations.shift();
  }

  public async run(): Promise<void> {
    while (this.operations.length > 0) {
      const operation = this.shift();
      if (operation instanceof Operation) {
        await operation.run(this);
      }
    }
  }
}
