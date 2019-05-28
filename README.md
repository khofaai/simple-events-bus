# simple-eventbus
simple eventbus based on fbemitter

## Usage

basic :

```javascript
import eventBus from 'simple-eventbus';

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

// to emit a event
eventBus.emit('key');

// check if listener exist
eventBus.listenerExist('key');

//get EventEmitter Instance
eventBus.getInstance();
```
