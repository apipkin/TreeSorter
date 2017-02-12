var bst = require('./lib/BSTree');

var arr = [16,22,63,94,25,17,28,23,34,5];

arr.sort(function() {
  return 5 - Math.random() * 10;
}).forEach(function (v) {
    bst.addValue(v);
});

console.log('Given: ' + arr.join(' '));
console.log('Asc:   ' + bst.toStringAsc());
console.log('Desc:  ' + bst.toStringDesc());
