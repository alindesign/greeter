import { Task } from "./task";

interface SetupOptions {
  cwd: string;
  user: string;
  branch: string;
}

export const Setup = (options: Partial<SetupOptions> = {}) =>
  new Task((app) => {
    app.os.setCwd(options.cwd ?? "~/projects/greeter");
    app.os.setUser(options.user ?? "root");
    app.git.setBranch(options.branch ?? "main");
  });
