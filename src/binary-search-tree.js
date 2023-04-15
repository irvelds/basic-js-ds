const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }


  add(data) {
    const insertNode = new Node(data)
    if (!this.rootElement) {
      this.rootElement = insertNode;
      return
    }
    let currentNode = this.rootElement;
    while (currentNode) {
      if (insertNode.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = insertNode;
          return;
        }
        currentNode = currentNode.right;
      }
      else {

        if (!currentNode.left) {
          currentNode.left = insertNode;
          return;

        }
        currentNode = currentNode.left;
      }

    }
  }


  has(data) {
    let currentNode = this.rootElement;
    while (true) {
      if (!currentNode) {
        return false;
      }
      if (currentNode.data === data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }


  find(data) {
    let currentNode = this.rootElement;
    while (true) {
      if (!currentNode) {
        return null;
      }
      if (currentNode.data === data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }


  remove(data) {
    this.rootElement = removeNode(this.rootElement, data);

    function removeNode(currentNode, value) {
      if (!currentNode) {
        return null;
      }

      if (value < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, value);
        return currentNode;
      } else if (value > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, value);
        return currentNode;
      }

      else {
        if (!currentNode.left && !currentNode.right) {
          return null;
        }
        if (!currentNode.left) {
          currentNode = currentNode.right;
          return currentNode;
        }
        if (!currentNode.right) {
          currentNode = currentNode.left;
          return currentNode;
        }

        let minFromRight = currentNode.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        currentNode.data = minFromRight.data;
        currentNode.right = removeNode(currentNode.right, minFromRight.data);
        return currentNode;
      }
    }
  }


  min() {
    let currentNode = this.rootElement;
    if (!this.rootElement) {
      return;
    }
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootElement;
    if (!this.rootElement) {
      return;
    }
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}


module.exports = {
  BinarySearchTree
};