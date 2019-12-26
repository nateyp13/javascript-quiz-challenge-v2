var questions = [
    ["how many states are in the US?", 50],
    ["how many continents are there?", 7],
    ["How many legs do an insect have?", 6]
];

var correct = [];
var wrong = [];
var guess;
var correctNum = 0;

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var htmlList = '<ol>';
    for (i = 0; i < arr.length; i += 1) {
        htmlList += '<li>' + arr[i] + '</li>';
    }
    htmlList += '</ol>';
    return htmlList;
}

for (i = 0; i < questions.length; i += 1) {
    var question = questions[i][0];
    var answer = questions[i][1];
    guess = parseInt(prompt(question));
    if (guess === answer) {
        correctNum += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

html = "You got " + correctNum + " questions correct."
html += "<h2>You got these questions correct:</h2>"
html += buildList(correct);
html += "<h2>You got these questions wrong:</h2>"
html += buildList(wrong);
print(html);