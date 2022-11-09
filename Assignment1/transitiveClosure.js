console.log("Transitive Closure");

let setA = [];
let subSet = [];
let i = 0;
// Here the value is stored in new variable A
function myFunction() {
  var A = document.getElementById("setInput");
  let x = A.value;
  if (x) {
    console.log(x)
    subSet.push(parseInt(x.charAt(0)));
    subSet.push(parseInt(x.charAt(2)));
    setA[i] = subSet;
    console.log(i);
  } else {
    console.log("No value to push");
  }
//   document.getElementById("A").innerHTML = setA;
  A.value = "";
  subSet = [];
  i += 1;
  console.log("subSet=>", setA);
}

function clearHandler() {
  setA.length = 0;
  document.getElementById("A").innerHTML = (setA);
}

function TransitiveClosure() {
  console.log("TransitiveClosure", setA);
}
