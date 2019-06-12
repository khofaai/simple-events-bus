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

// to remove a listener
eventBus.removeListener('key');

// to remove all listeners
eventBus.removeAllListeners();

// to emit a event
eventBus.emit('key');

// check if listener exist
eventBus.listenerExist('key');

//get EventEmitter Instance
eventBus.getInstance();
```
