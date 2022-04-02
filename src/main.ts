import "./style.scss";
import { Application } from "./app/application";
import { Console } from "./app/console";
import { Text } from "./app/text";
import Message from "./message.html?raw";
import { Line } from "./app/line";
import { withStatus } from "./app/tasks/withStatus";
import { Colors } from "./app/colors";
import { Sleep } from "./app/sleep";
import { Program } from "./app/program";
import { Git } from "./app/git";
import { Setup } from "./app/tasks/setup";

const app = new Application(new Console("#console"));

app
  .push(Setup({ user: "alinus" }))
  .push(Console.Clear)
  .push(new Line(Colors.green("Booting server...")))
  .push(Sleep.randomized(1000, 1400))
  .push(new Line(Colors.cyan("EFI STUB:"), "EFI_RNG_PROTOCOL, unavailable"), Sleep.randomized(300, 900))
  .push(
    new Line(Colors.cyan("EFI STUB:"), Colors.red("ERROR: FIRMWARE BUG: kernel image not aligned on 64k boundary")),
    Sleep.randomized(300, 900)
  )
  .push(
    new Line(Colors.cyan("EFI STUB:"), Colors.red("ERROR: FIRMWARE BUG: Image BSS overlaps adjacent EFI memory region")),
    Sleep.randomized(300, 900)
  )
  .push(new Line(Colors.cyan("EFI STUB:"), "Using DTB from configuration table"), Sleep.randomized(300, 900))
  .push(new Line(Colors.cyan("EFI STUB:"), "Exiting boot service and installing virtual address map ..."), Sleep.randomized(300, 900))
  .push(new Line(Colors.cyan("OS:"), "Loading kernel"), Sleep.randomized(300, 900))
  .push(new Line(Colors.cyan("OS:"), "Retrieve hardware information"), Sleep.randomized(300, 900))
  .push(
    new Line("    - /dev/sda ff17694d-8c7c-4882-bb69-3e0886f4a097"),
    new Line("    - /dev/sdb 650fab8c-d727-42d4-a036-9ce09b92dbf9"),
    new Line("    - /dev/sdc 820bd606-6b31-4750-b113-d6256ca90792")
  )
  .push(new Line(Colors.cyan("OS:"), "Initializing hardware"), Sleep.randomized(300, 900))
  .push(new Line(Colors.green("Login as {{user}}")))
  .push(Sleep.randomized(1000, 1400))
  .push(new Program("javac", "-classpath .:target/dependency/* -d . $(find . -type f -name  '*.java')"))
  .push(Sleep.randomized(1000, 1400))
  .push(new Program("java", "-classpath .:target/dependency/* Greeter"))
  .push(Sleep.randomized(2000, 4000))
  .push(new Line(`Exception in thread "main" java.lang.NullPointerException: Cannot throw exception because "null" is null`))
  .push(new Line(`\tat Main.main(Main.java:3)`))
  .push(withStatus(1))
  .push(Sleep.randomized(300, 900))
  .push(Git.Checkout("feature/greater"))
  .push(Sleep.randomized(300, 900))
  .push(new Program("javac", "-classpath .:target/dependency/* -d . $(find . -type f -name  '*.java')"))
  .push(Sleep.randomized(1000, 1400))
  .push(new Program("java", "-classpath .:target/dependency/* Greeter"))
  .push(Sleep.randomized(1000, 1400))
  .push(Console.Clear)
  .push(Text.html(Message))
  .run();
