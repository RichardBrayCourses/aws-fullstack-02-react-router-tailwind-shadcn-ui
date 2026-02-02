export function log() {
  console.log("log has been called");
}

export const arrowLog = () => {
  console.log("arrowLog has been called");
};

export function logMsg(msg) {
  console.log(msg);
}

export const arrowLogMsg = (msg) => {
  console.log(msg);
};

export function makeLogMsg(msg) {
  const timeString = new Date().toLocaleTimeString();
  return `${timeString}: ${msg}`;
}

export const arrowMakeLogMsg = (msg) => {
  const timeString = new Date().toLocaleTimeString();
  return `${timeString}: ${msg}`;
};

export function runFunc(func) {
  func();
}
