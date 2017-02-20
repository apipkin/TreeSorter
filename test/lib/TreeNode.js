const test = require('tap').test;
const nodeFactory = require('../../src/lib/TreeNode').Factory;

test('Nodes values are checked with methods', (t) => {
  var l = nodeFactory({ value: 3, display: '3' });
  var r = nodeFactory({ value: 5, display: '5' });
  var n = nodeFactory({ value: 4, display: '4' });
  n.left = l;
  n.right = r;

  t.equals(n.hasLeft(), true);
  t.equals(n.hasRight(), true);
  t.equals(n.hasValue(), true);
  t.end();
});

test('Values are concatenated in order from left to right', (t) => {
  var l = nodeFactory({ value: 3, display: '3' });
  var r = nodeFactory({ value: 5, display: '5' });
  var n = nodeFactory({ value: 4, display: '4' });
  n.left = l;
  n.right = r;

  t.equals(n.toArray().join(' '), '3 4 5');
  t.end();
});

test('Nodes return value if there is no display', (t) => {
  var n = nodeFactory({ value: 3 });

  t.equals(n.toString(), '3');
  t.end();
});
