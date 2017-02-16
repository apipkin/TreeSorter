const nodeFactory = require('./TreeNode').Factory;
const InvalidValue = require('./InvalidValue');

/**
 * Binary Search Tree (BSTree): Values added to the root node are added to the
 *   left if less than or to the right if the value is greater than or equal.
 */
const Tree = {
  /**
   * Tree root node
   */
  root: null,

  /**
   * Adds list of values to the tree
   * @param {Array|String} 
   * @returns {Object} BSTree
   */
  addValues(values) {
    this.validate(values)
        .map(this.convertValuesToNodes.bind(this))
        .forEach(v => this.addValue(v));
      
    return this;
  },

  /**
   * Adds the value node to the root node based on the value of the valueNode and
   *   the targetNode. If the valueNode is less than the targetNode, the valueNode 
   *   is attempted to be added to the left leg of the targetNode. Otherwise, the
   *   valueNode is attempted to be added to the right leg of the targetNode.
   * @param {Object} 
   * @param {Object} [optional] 
   */
  addValue(valueNode, targetNode) {
    if (!this.root) { // first pass
      this.root = valueNode;
    }
    else {
      targetNode || (targetNode = this.root);

      if (valueNode.value < targetNode.value) {
        if (targetNode.hasLeft()) {
          this.addValue(valueNode, targetNode.left);
        }
        else {
          targetNode.left = valueNode;
        }
      }
      else {
        if (targetNode.hasRight()) {
          this.addValue(valueNode, targetNode.right);
        }
        else {
          targetNode.right = valueNode;
        }
      }
    }

    return this;
  },

  /**
   * Checks each value and validates it as an integer or a fraction. All others 
   *   will throw and error.
   * @throws {Error} InvalidValue
   * @param {Array}
   * @return {Array}
   */
  validate(values) {
    values = this.sanitizeValue(values);

    values.forEach(v => {
      if (!this.isFraction(v)){ 
        var v2 = parseInt(v, 10);

        if (v != v2) { // intentially check for coersion equality
          throw new Error('Invalid value: ' + v);
        }

        if (isNaN(v2)){ 
          throw new Error('Value is not a fraction or an interger.');
        }
      }
    });

    return values;
  },

  /**
   * Ensures values are an Array and not a String or another type
   * @param {Array|String}
   * @returns {Array}
   */
  sanitizeValue(values) {
    if (Array.isArray(values)) {
      return values.slice(0);
    } 
    else {
      values = values.toString()
                     .replace(/^ +/, '')   // trim leading spaces
                     .replace(/ +$/, '')   // trim trailing spaces
                     .replace(/ +/g, ' '); // replace consecutive spaces

      return values.split(' ');
    }
  },

  /**
   * Convert individual values to TreeNodes
   * @param {String}
   * @return {Object} TreeNode
   */
  convertValuesToNodes(value) {
    const display = value;

    if (this.isFraction(value)) {
      value = value.split('/').reduce((a,b) =>
        parseInt(a, 10) / parseInt(b, 10)
      );
    } 
    else {
      value = parseInt(value, 10);
    }

    return nodeFactory({
      value: value,
      display: display
    });
  },

  /**
   * Check if value is a fraction 
   * @param {String}
   * @return {Boolean}
   */
  isFraction(value) {
    return /^\d+\/\d+$/g.test(value);
  },

  /**
   * Return values in ascending order
   * @returns {String}
   */
  toStringAsc() {
    return this.root.toArray().join(' ');
  },

  /**
   * Return values in decending order
   * @returns {String}
   */
  toStringDesc() {
    return this.root.toArray().reverse().join(' ');
  }
};

// exports
module.exports = function () {
  return Object.assign({}, Tree, { root: nodeFactory() });
};
