# constant-keys
Utility function that takes an array of strings and returns an object with the array values as keys, and each value being the same as a key. Very useful for using as action or event name constants in something like React.

Example:

```javascript
import constantKeys from 'constant-keys';

const actions = constantKeys(['ADD_TODO', 'DELETE_TODO']);
```

'actions' will now contain:

```javascript
{
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO'
}
```

## Requirements

All code is ES6/2015 so you'll need to compile with someting like [Babel](https://babeljs.io/).

## Installation

```bash
npm install constant-keys
```

### Example

This is how you might go about using this with something like react / flux:

```javascript
// constants/todo-constants.js
import constantKeys from 'constant-keys';

export default constantKeys(['ADD_TODO', 'DELETE_TODO']);

```

```javascript
// actions/todo-actions.js
import types from '../constants/action-constants';
import dispather from '../dispatcher/dispatcher';

export default {
  createTodo (title) {
    dispatcher.dispatch {
      type: types.ADD_TODO,
      title
    }
  }
}
```

