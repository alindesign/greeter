import { Operation } from "./operation";
import { Colors } from "./colors";
import { Application } from "./application";

export class Text extends Operation {
  public contents: string = "";

  constructor(...contents: (string | string[])[]) {
    super();
    this.contents = Colors.foreground(contents.flat().filter(Boolean).join(" "));
  }

  public run(app: Application) {
    const contents = Object.entries({
      ...app.os,
      ...app.git,
      status: app.status,
    }).reduce((acc, [key, value]) => acc.replace("{{" + key + "}}", String(value)), this.contents ?? "");

    app.console.write(contents);
  }

  public static join(...args: string[]) {
    return args.join("");
  }

  public static joinSpace(...args: string[]) {
    return args.join(" ");
  }

  public static html(text: string) {
    return new Text(text);
  }
}
