var readline=require('readline-sync');

var score=0

var user=readline.question("Welcome to the KnowMe quiz made by Nitin\nCan I know your name:\n");

var welcomeMessage = getUserName(user);

console.log("\n"+"Welcome " + welcomeMessage + " Let's start with knowMe quiz 🚀");

var questionSet=[
  {
    question:"Where do I live?",
    answer: "Mumbai"
  },
  {
    question:"What is my birthday month?",
    answer: "July"
  },
  {
    question: "What's my favorite food?",
    answer: "Pizza"
  },
  {
    question: "Where do I currently work?",
    answer: "nVent"
  }
];

function getUserName(userName){
  var filteredValue = userName.charAt(0).toUpperCase() + userName.slice(1);
  return filteredValue;
}

function verifyAnswers(data,response){
  if(data.answer.toLowerCase() == response.toLowerCase()){
    score++;
    console.log("Correct Answer 😊");
  }else{
    score--;
    console.log("Wrong Answer ☹️");
  }
  console.log(`\nCurrent Score : ${score}`)
}

for(var i in questionSet){
  var userResponse =readline.question("\n"+questionSet[i].question+"\n");
  verifyAnswers(questionSet[i], userResponse);
}

console.log(`\n \nThanks ${user} for using the KnowMe quiz app`);
console.log(`\nYour final score is 📋  ${score}`);
console.log(`\nHave a nice day ❕`); 