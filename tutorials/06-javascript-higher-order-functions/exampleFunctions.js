export function log() {
  const value = "fred";
  console.log(`hello ${value}`);
}

export function logMsg(msg) {
  console.log(msg);
}

export function runFunc(func) {
  func();
}
