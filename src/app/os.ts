export class OS {
  public cwd: string = "~/";
  public user: string = "root";

  public setCwd(cwd: string) {
    this.cwd = cwd;
    return this;
  }

  public setUser(user: string) {
    this.user = user;
    return this;
  }
}
