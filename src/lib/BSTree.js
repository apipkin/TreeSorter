var nodeFactory = require('./TreeNode').Factory;

var Tree = {
  root: nodeFactory(),
  addValues: function (val) {
    val = this.sanitizeValue(val);
    val.forEach(v => this.addValue(v));
  },
  addValue: function (val, node) {
    if (!node) {
      node = this.root;
    }

    console.log('---', val);
    if (!node.hasValue()){
      node.value = val;
      node.display = '!' + val;
    }
    else if (val < node.value) {
      if (node.hasLeft()) {
        this.addValue(val, node.left);
      }
      else {
        node.left = nodeFactory({ 
          value: val,
          display: 'L' + val
        });
      }
    }
    else {
      if (node.hasRight()) {
        this.addValue(val, node.right);
      }
      else {
        node.right = nodeFactory({ 
          value: val,
          display: 'R' + val
         });
      }
    }
  },
  sanitizeValue: function (val) {
    if (Array.isArray(val)) {
      return val.slice(0);
    }
    else {
      return val.toString().split(' ');
    }
  },
  toStringAsc: function () {
    return this.root.toArray().join(' ');
  },
  toStringDesc: function () {
    return this.root.toArray().reverse().join(' ');
  }
};

module.exports = function () {
  return Object.assign({}, Tree, { root: nodeFactory() });
};
