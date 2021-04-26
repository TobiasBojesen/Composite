
let Node = function (name) {
  this.children = [];
  this.name = name;
}

Node.prototype    = {
  add: function (child) {
    this.children.push(child);
  },
  getChild: function (i) {
    return this.children[i];
  },
  hasChildren: function () {
    return this.children.length > 0;
  },
  removeChild: function (child) {
    let length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child){
        this.children.splice(i,1);
      }
    }
  },
  removeName: function(name){
    for (let i = 0, len = this.children.length; i < len; i++) {
      let ch = this.getChild(i);
      console.log(ch.name);
      ch.removeName(name);
    }
  }
}

let n1 = new Node("Root");
let c1 = new Node("Child1");
n1.add(c1);

console.log(n1);
console.log(n1.hasChildren());

//let fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 2, "Lemon", "Kiwi");

//n1.removeChild(c1);

let log = (function () {
  let txt = "";
  return {
    add: function (msg){ txt += msg + "\n";},
    show: function () { alert(txt); txt = "";}
  }
})();


function traverse(indent, child){
  console.log("indent: " +  indent);
  //log.add("Indent: " + indent + " " + child.name);
  log.add(Array(indent++).join("--") + child.name);
  //indent++;
  for (let i = 0, len = child.children.length; i < len; i++) {
    traverse(indent, child.getChild(i))
  }
}
let tree = new Node("root");
function run() {
  let left = new Node("left");
  let right = new Node("right");
  let leftLeft = new Node("leftLeft");
  let rightRight = new Node("rightRight");

  tree.add(left);
  tree.add(right);
  left.add(leftLeft);
  right.add(rightRight);

  traverse(1, tree);

  log.show();
}

run();
tree.removeName("left");
