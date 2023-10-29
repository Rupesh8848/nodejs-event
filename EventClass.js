module.exports = class Event {
  listeners = {};
  addListener(eventName, callbackFunction) {
    const fns = this.listeners[eventName];
    if (fns) {
      this.listeners[eventName].push(callbackFunction);
    } else {
      this.listeners[eventName] = [callbackFunction];
    }
  }

  emit(eventName, param) {
    const fns = this.listeners[eventName];
    if (fns) {
      fns.forEach((fn) => {
        fn(param);
      });
    } else {
      console.log("Please subscribe to the event first");
    }
  }

  on(eventName, callbackFunction) {
    this.addListener(eventName, callbackFunction);
  }

  once(eventName, callbackFunction) {
    this.listeners[eventName] = [callbackFunction];
  }

  removeListener(eventName) {
    delete this.listeners[eventName];
  }

  eventNames() {
    const names = [];
    Object.keys(this.listeners).map((eventName) => {
      names.push(eventName);
    });
    console.log(names);
  }

  listenerCount(eventName) {
    if (!this.listeners[eventName]) console.log("No listeners found");
    else
      console.log(
        "Total subscribers for ",
        eventName,
        " is ",
        this.listeners[eventName].length
      );
  }
};
