import { Prompt } from "./prompt";
import { Colors } from "./colors";
import { Application } from "./application";

export class Program extends Prompt {
  constructor(private program: string, ...args: (string | string[])[]) {
    super(Colors.green(program), ...args);
  }

  public async run(app: Application) {
    this.contents = this.contents.replace(/\$\(/g, Colors.magenta("$("));
    this.contents = this.contents.replace(/\(/g, Colors.magenta("("));
    this.contents = this.contents.replace(/\)/g, Colors.magenta(")"));
    this.contents = this.contents.replace(/\/\*/g, "/" + Colors.blue("*"));
    this.contents = this.contents.replace(/('.*')/g, Colors.yellow("$1"));

    document.title = this.program;

    await super.run(app);
  }
}
