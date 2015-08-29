import mirror from 'keymirror';
import merge from 'ramda/src/merge';

export default function constantKeys (keys) {
  return mirror(keys.reduce((obj, key) => merge(obj, { [key]: null }), {}));
}
