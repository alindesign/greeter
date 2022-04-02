import { Application } from "./application";
import { Colors } from "./colors";
import { Line } from "./line";

export class Prompt extends Line {
  run(app: Application) {
    const line = new Line(
      Colors[app.status === 0 ? "green" : "red"]("➜"),
      Colors.cyan(app.os.cwd),
      app.git.branch && Colors.blue("git:(", Colors.red(app.git.branch), ")"),
      this.contents
    );

    line.run(app);
  }
}
