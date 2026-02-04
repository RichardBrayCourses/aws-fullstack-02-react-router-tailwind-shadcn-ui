import { log, logMsg, runFunc } from "./exampleFunctions.js";
import { makeButton } from "./button.js";

log();
logMsg("my message");

runFunc(log);

runFunc(() => logMsg("important"));
makeButton();
