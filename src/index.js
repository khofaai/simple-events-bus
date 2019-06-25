import { EventEmitter } from 'fbemitter';
let eventBus = new EventEmitter();

let EventInterface = {

  listenerExist(key) {
    return eventBus.listeners(key).length > 0;
  },
  
  addListeners(key, callback) {
    eventBus.addListener(key, callback);
  },

  addListener(key, callback) {
    if(!this.listenerExist(key)) {
      eventBus.addListener(key, callback);
    }
  },

  getListenersOf(key) {
    let obj = eventBus._subscriber._subscriptionsForType;
    let listeners = Object.keys(obj).filter((k) => { return ~k.indexOf(key) });
    return listeners;
  },
  
  emit(key, data) {
    eventBus.emit(key, data);
  },
  
  emitAll(key, data) {
    let listeners = EventInterface.getListenersOf(key);
    listeners.map(_key => {
      EventInterface.emit(_key, data);
    });
  },

  removeListener(key) {
    if(this.listenerExist(key)) {
      delete eventBus._subscriber._subscriptionsForType[key];
    }
  },
  
  removeAllListeners() {
    eventBus.removeAllListeners();
  },

  removeListenersOf(key) {
    EventInterface.getListenersOf(key).map(key => {
      EventInterface.removeListener(key);
    });
  },
  
  getInstance() {
    return eventBus;
  }
}

export default EventInterface;