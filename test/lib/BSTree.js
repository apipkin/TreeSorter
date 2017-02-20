const test = require('tap').test;
const BSTree = require('../../src/lib/BSTree');
const InvalidValue = require('../../src/lib/InvalidValue');


test('BSTree has a null root initially', (t) => {
  var tree = BSTree();

  t.equals(tree.root, null);
  t.end();
});

test('Adding a value to the tree sets the root node', (t) => {
  // integer
  var tree = BSTree();
  tree.addValue(3);

  t.isA(tree.root, 'object');
  t.equals(tree.toStringAsc(), '3');

  // string
  tree = BSTree();
  tree.addValue('4');

  t.isA(tree.root, 'object');
  t.equals(tree.toStringAsc(), '4');

  t.end();
});

test('Multiple values as an array are sorted correctly', (t) => {
  var tree = BSTree();
  tree.addValues([3, 4, 6, '10/2', '1/2']);

  t.equals(tree.toStringAsc(), '1/2 3 4 10/2 6');
  t.equals(tree.toStringDesc(), '6 10/2 4 3 1/2');

  t.end();
});

test('Multiple values as a string with extra spaces are sorted correctly', (t) => {
  var tree = BSTree();
  tree.addValues('  3 4  6 10/2 1/2 2/3    ');

  t.equals(tree.toStringAsc(), '1/2 2/3 3 4 10/2 6');
  t.equals(tree.toStringDesc(), '6 10/2 4 3 2/3 1/2');

  t.end();
});

test('Throws an error if a invalid characters are in the value', (t) => {
  var tree = BSTree();

  t.throws(function () { tree.addValues('2 b 3'); }, 'Invalid value: b');

  t.end();
});

test('Throws an error if a decimal is in the value', (t) => {
  var tree = BSTree();

  t.throws(function () { tree.addValues('2 2.3 3'); }, 'Invalid value: 2.3');

  t.end();
});
