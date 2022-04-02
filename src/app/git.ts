import { Task } from "./tasks/task";
import { Program } from "./program";
import { Operation } from "./operation";
import { withStatus } from "./tasks/withStatus";

export class Git {
  public branch: string = "";

  public setBranch(branch: string) {
    this.branch = branch;
    return this;
  }

  public static Checkout(branch: string) {
    return new Task(async (app) => {
      await Operation.run(app, [new Program("git", "checkout", branch), withStatus(0)]);
      app.git.setBranch(branch);
    });
  }
}
