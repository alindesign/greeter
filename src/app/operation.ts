import { Application } from "./application";

export abstract class Operation {
  abstract run(app: Application): Promise<void> | void;

  public static async run(app: Application, operations: Operation[]) {
    const ops = [...operations];
    let operation: Operation = ops.shift()!;

    while (!!operation) {
      await operation.run(app);
      operation = ops.shift()!;
    }
  }
}
