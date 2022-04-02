import { Application } from "./application";
import { Text } from "./text";

export class Line extends Text {
  public run(app: Application) {
    this.contents += "\n";
    super.run(app);
  }
}
