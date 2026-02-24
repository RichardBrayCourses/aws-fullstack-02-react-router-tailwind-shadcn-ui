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

export const arrowlog = () => {
  const value = "jane";
  console.log(`hello ${value}`);
};

export const arrowLogMsg = (msg) => {
  console.log(msg);
};

export const arrowMakeMsg = (msg) => {
  const timeString = new Date().toLocaleTimeString();

  return `${timeString}: ${msg}`;
};

export const oneLiner = () => console.log("one liner");

export const getValue = () => "glenda the good";
