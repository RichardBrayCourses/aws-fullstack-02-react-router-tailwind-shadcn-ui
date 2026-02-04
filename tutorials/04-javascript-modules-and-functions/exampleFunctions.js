export function log() {
  const value = "fred";
  console.log(`hello ${value}`);
}

export function logMsg(msg) {
  console.log(msg);
}

export function makeMsg(msg) {
  const timeString = new Date().toLocaleTimeString();

  return `${timeString}: ${msg}`;
}
