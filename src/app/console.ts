import { Task } from "./tasks/task";

export class Console {
  private pre: HTMLPreElement;
  public static Clear = new Task((app) => app.console.clear());

  constructor(id: string) {
    let el = document.querySelector<HTMLPreElement>(id);
    if (!el) {
      el = document.createElement("pre");
      el.id = id.replace(/^#/, "");
      document.body.appendChild(el);
    }

    this.pre = el;
  }

  write(line: string) {
    this.pre.innerHTML += line;
    this.pre.scroll({
      top: this.pre.scrollHeight,
      behavior: "smooth",
    });
  }

  writeln(line: string) {
    this.write(line + "\n");
  }

  clear() {
    this.pre.innerHTML = "";
  }
}
