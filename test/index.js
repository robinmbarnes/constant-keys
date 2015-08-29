import constantKeys from '../index';
import test from 'tape';

test('Correct object is created', (t) => {
  let expected = {
    foo: 'foo',
    bar: 'bar'
  };

  let actual = constantKeys(['foo', 'bar']);

  t.deepEquals(expected, actual);
  t.end();
});
