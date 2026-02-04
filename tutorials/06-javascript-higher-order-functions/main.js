import { log, logMsg, runFunc } from "./exampleFunctions.js";

log();
logMsg("my message");

runFunc(log);

runFunc(() => logMsg("important"));
