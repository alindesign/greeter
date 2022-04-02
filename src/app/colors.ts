export class Colors {
  public static black(...text: string[]) {
    return this.color("black", ...text);
  }

  public static red(...text: string[]) {
    return this.color("red", ...text);
  }

  public static green(...text: string[]) {
    return this.color("green", ...text);
  }

  public static yellow(...text: string[]) {
    return this.color("yellow", ...text);
  }

  public static blue(...text: string[]) {
    return this.color("blue", ...text);
  }

  public static magenta(...text: string[]) {
    return this.color("magenta", ...text);
  }

  public static cyan(...text: string[]) {
    return this.color("cyan", ...text);
  }

  public static white(...text: string[]) {
    return this.color("white", ...text);
  }

  public static foreground(...text: string[]) {
    return this.color("foreground", ...text);
  }

  public static color(color: string, ...text: string[]) {
    return `<span class="code ${color}">${text.join("")}</span>`;
  }
}
