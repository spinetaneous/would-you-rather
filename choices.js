/* ^_^ IRENE'S THINKING SPACE ^_^
always important to think before you code!

// IDEA : having arrays with choices + choice msgs linked
together via index

choice1: ["have eyes for ears?"]
msg1: ["You'll see very well!"]
choice2: ["have ears for eyes?"]
msg2: ["You'll hear very well!"]

* in main.html:
have title: WOULD YOU RATHER...
choice1 OR choice 2
// IDEA in JS file, choose random num from 0 to arrlength-1
// get choices and open to choice html pages

* in each choice page:
get and display appropriate choice msg
have go back button
*/
var choice1 = ["have eyes for ears", "have one million dollars"];
var msg1 = ["You'll see very well!", "You'd be very rich!"];

var choice2 = ["have ears for eyes", "never get sick"];
var msg2 = ["You'll hear very well!", "Your health would be perfect!"];

// putting this here won't work because each html page load
// will reset the value
// var randNum = Math.floor(Math.random() * (choice1.length));

function setRandNum() {
  // sets the random number we'll be using
  // necessary to put into a function because
  // otherwise each html page will reload the .js file
  // and reset our randNum
  var randNum = Math.floor(Math.random() * (choice1.length));
  // save randNum into local storage
  localStorage.setItem("randNum", randNum);
}

function getChoice1() {
  // find button1 and give it a value from choice1
  var randNum = localStorage.getItem("randNum");
  document.getElementById('button1').value = choice1[randNum];
}

function getChoice2() {
  // find button2 and give it a value from choice2
  var randNum = localStorage.getItem("randNum");
  document.getElementById('button2').value = choice2[randNum];
}

function getMsg1() {
  // find header and give it a msg from msg1
  // use innerHTML to write to choice1.html
  var randNum = localStorage.getItem("randNum");
  document.getElementById('msg1').innerHTML = msg1[randNum];
}

function getMsg2() {
  // find header and give it a msg from msg2
  // use innerHTML to write to choice2.html
  var randNum = localStorage.getItem("randNum");
  document.getElementById('msg2').innerHTML = msg2[randNum];
}
