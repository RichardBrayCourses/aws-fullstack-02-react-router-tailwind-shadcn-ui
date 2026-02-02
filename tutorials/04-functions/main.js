import {
  log,
  arrowLog,
  logMsg,
  arrowLogMsg,
  makeLogMsg,
  arrowMakeLogMsg,
  runFunc,
} from "./functions.js";

log();
arrowLog();

logMsg("hello world");
arrowLogMsg("hello world arrow");

logMsg(makeLogMsg("made hello world"));
arrowLogMsg(arrowMakeLogMsg("made hello world arrow"));

runFunc(log);
runFunc(arrowLog);

const myFunc = () => console.log("hurrah");

runFunc(myFunc);
runFunc(() => console.log("hurrah"));
