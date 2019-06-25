# simple-events-bus
simple eventbus based on fbemitter

[![npm](https://img.shields.io/npm/v/simple-events-bus.svg)](https://www.npmjs.com/package/simple-events-bus) ![license](https://img.shields.io/github/license/khofaai/simple-events-bus.svg) [![npm](https://img.shields.io/npm/dw/simple-events-bus.svg)](https://www.npmjs.com/package/simple-events-bus) [![npm](https://img.shields.io/npm/dt/simple-events-bus.svg)](https://www.npmjs.com/package/simple-events-bus) [![Build Status](https://travis-ci.org/khofaai/simple-events-bus.svg?branch=master)](https://travis-ci.org/khofaai/simple-events-bus)

## Usage

basic :

```javascript
import eventBus from 'simple-events-bus';

// one listener
eventBus.addListener('key', _ => {
  // do something
});

// multiple listener
eventBus.addListeners('key', _ => {
  // do something
});

// get all listeners keys that has `key` in there name, like `key-dsfy`, `key-something`, ...
eventBus.getListenersOf('key');

// to remove a listener
eventBus.removeListener('key');

// to remove all listeners
eventBus.removeAllListeners();

// to remove all listeners with name has with `key` in there name
eventBus.removeListenersOf('key');

// to emit a event
eventBus.emit('key');

// to emit a event to all subscribed event that has `key` in there name 
// `key` `key-test` `key-something` all theses event will be triggered
eventBus.emitAll('key');

// check if listener exist
eventBus.listenerExist('key');

//get EventEmitter Instance
eventBus.getInstance();
```
