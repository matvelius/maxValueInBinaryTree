
// Comment it before submitting
// class CNode {  
//   constructor(value) {  
//     this.value = value;  
//     this.left = null;  
//     this.right = null;  
//   }  
// }


function solution(root) {
  const rootMaxValue = root.value * 1
  const leftSubtreeMaxValue = traverseBinaryTree(root.left)
  const rightSubtreeMaxValue = traverseBinaryTree(root.right)

  return Math.max(rootMaxValue, leftSubtreeMaxValue, rightSubtreeMaxValue)
}

function traverseBinaryTree(node) {
  if (node == null) {
    return 0
  }

  const nodeMaxValue = node.value * 1
  const leftSubtreeMaxValue = traverseBinaryTree(node.left)
  const rightSubtreeMaxValue = traverseBinaryTree(node.right)
  
  return Math.max(nodeMaxValue, leftSubtreeMaxValue, rightSubtreeMaxValue)
}

// function test() {
//   var node1 = new CNode(1);
//   var node2 = new CNode(-5);
//   var node3 = new CNode(33);
//   node3.left = node1;
//   node3.right = node2;
//   var node4 = new CNode(2);
//   node4.left = node3;
//   console.log(solution(node4) === 33);
// }

// test()

// function test2() {
//     var node1 = new CNode(-11);
//     var node2 = new CNode(15);
//     var node3 = new CNode(3);
//     var node5 = new CNode(33)
//     node3.left = node1;
//     node3.right = node2;
//     var node4 = new CNode(2);
//     node4.left = node3;
//     node4.right = node5
//     console.log(solution(node4) == 33);
// }

// test2()

// console.assert(123 === 123)