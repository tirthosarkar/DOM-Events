console.log('external file');
function makeYellow() {
  document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
  document.body.style.backgroundColor = 'Red';
}

 //option 3: get Element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
//  console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeblue() {
  document.body.style.backgroundColor = 'blue';
};

const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple)
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = 'purple';
}