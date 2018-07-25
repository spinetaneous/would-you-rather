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
var choice1 = ["have eyes for ears?"];
var msg1 = ["You'll see very well!"];

var choice2 = ["have ears for eyes?"];
var mgs2 = ["You'll hear very well!"];

var rand_num = Math.floor(Math.random() * (choice1.length));
