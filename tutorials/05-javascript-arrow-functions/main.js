import {
  log,
  logMsg,
  makeMsg,
  arrowlog,
  arrowLogMsg,
  arrowMakeMsg,
  oneLiner,
  getValue,
} from "./exampleFunctions.js";

log();
logMsg("my message");
logMsg(makeMsg("passed in"));

arrowlog();
arrowLogMsg("arrow message");
arrowLogMsg(arrowMakeMsg("glenda"));

oneLiner();

logMsg(getValue());
