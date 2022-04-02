import { Task } from "./task";

export function withStatus(status: number): Task {
  return new Task((app) => {
    app.setStatus(status);
  });
}
