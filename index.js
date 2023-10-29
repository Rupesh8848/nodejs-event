const EventEmitter = require("./EventClass");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("hello-event", (daa) => {
  console.log("Hello, from event 1 ");
});

myE.on("hello-event", () => {
  console.log("Hello, from event 2");
});

myE.listenerCount("hello-event");

myE.once("hello-event", () => {
  console.log("The event above this event will not respond as once is called");
});

myE.listenerCount("hello-event");

myE.on("hello-event", (data) => {
  console.log("Hello, ", data.name, " from event handler with params");
});

myE.listenerCount("hello-event");

myE.removeListener("hello-event");

myE.listenerCount("hello-event");

myE.on("hello-2", () => {
  console.log("Hello from event 2");
});

myE.emit("hello-event", { name: "Rupesh" });
myE.emit("hello-2");
