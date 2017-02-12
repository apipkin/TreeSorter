var nodeFactory = require('./TreeNode').Factory;

var tree = {
  root: nodeFactory(),
  addValue: function (val, node) {
    if (!node) {
      node = this.root;
    }
    
    if (!node.hasValue()){
      node.value = val;
    }
    else if (val < node.value) {
      if (node.hasLeft()) {
        this.addValue(val, node.left);
      }
      else {
        node.left = nodeFactory({ value: val });
      }
    }
    else {
      if (node.hasRight()) {
        this.addValue(val, node.right);
      }
      else {
        node.right = nodeFactory({ value: val });
      }
    }
  },
  toStringAsc: function () {
    return this.root.toArray().join(' ');
  },
  toStringDesc: function () {
    return this.root.toArray().reverse().join(' ');
  }
};

module.exports = tree;
