class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(node){
    if(!this.root){
        this.root = node
    }else{
        this.insertNode(this.root,node)
    }
  }
  insertNode(root,node){
    if(root.val > node){
        
    }else{

    }
  }
}
const tree = new Tree()

const arr = [3,9,20,null,null,15,7]

arr.forEach((item)=>{
    tree.insert(item)
})