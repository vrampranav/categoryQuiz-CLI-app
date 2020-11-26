//Using Chalk
var chalk = require('chalk');
//Using readLineSync
var readLineSync = require('readline-sync');
// Level1 got
var gotL1_queOne = {
    question: `Who was responsible for creation of Night King?
    a.The Children of the Forest
    b.The First Men
    c.The Lord of Light\n`,
    answer: `a`
}
var gotL1_queTwo = {
    question: `Dany's dragons are called Drogon,Viserion and _______?
    a.Dougal
    b.Rhaegal
    c.Dragon\n`,
    answer: `b`
}
var gotL1_queThree = {
    question: `Who said:"I don't plan on knitting by the fire while men fight for me"?
    a.Lyanna Mormant
    b.Aarya Stark
    c.Sansa Stark\n`,
    answer: `a`
}
var gotL1_queFour = {
    question: `Where's the house of Black and White where they train Faceless Men?
    a.Qarth
    b.Braavos
    c.Mereen\n`,
    answer: `b`
}
//Level2 got
var gotL2_queOne = {
    question: `Who killed Daenerys Targaryen?
    a.Jon Snow
    b.Jaime Lannister
    c.Tyrion Lannister\n`,
    answer: `a`
}
var gotL2_queTwo = {
    question: `What's the name of Aarya's Sword?
    a.Needle
    b.Pointy
    c.Dragon Glass\n`,
    answer: `a`
}
var gotL2_queThree = {
    question: `Who killed the Night King?
    a.Dany
    b.Jon Snow
    c.Aarya Stark\n`,
    answer: `c`
}
var gotL2_queFour = {
    question: `From which house is Theon?
    a.Stark
    b.Grejoy
    c.Lannister\n`,
    answer: `b`
}
//Level3 got
var gotL3_queOne = {
    question: `What is Littlefinger's real name?
    a.Petyr Baelish
    b.Bryndun Tully
    c.Benjammen\n`,
    answer: `a`
}
var gotL3_queTwo = {
    question: `From which city did Daenerys get her Unsullied?
    a.Mereen
    b.Astapor
    c.Yunkai\n`,
    answer: `b`
}
var gotL3_queThree = {
    question: `Which can kill the dead?
    a.Dragon Glass
    b.Fire
    c.Arrow\n`,
    answer: `a`
}
var gotL3_queFour = {
    question: `Who chopped off Jaime's hand?
    a.Robb Stark
    b.Jon Snow
    c.Locke\n`,
    answer: `c`
}
var gotL1 = [gotL1_queOne, gotL1_queTwo, gotL1_queThree, gotL1_queFour];
var gotL2 = [gotL2_queOne, gotL2_queTwo, gotL2_queThree, gotL2_queFour];
var gotL3 = [gotL3_queOne, gotL3_queTwo, gotL3_queThree, gotL3_queFour];
//Cricket Questions
// Level1 Cricket
var CL1_queOne = {
    question:
        `Who won the second IPL title?
  a. RR
  b. CSK
  c. DC\n`,
    answer: `c`
}
var CL1_queTwo = {
    question:
        `Who scored the most runs in World Cup 2019?
  a. Warner
  b. Rohith Sharma
  c. KL Rahul\n`,
    answer: `b`
}
var CL1_queThree = {
    question: `Who has the most expensive signing at the first IPL auction?
  a. MS Dhoni
  b. Anil Kumble
  c. Ganguly\n`,
    answer: `a`
}
var CL1_queFour = {
    question: `What's the highest individual score in IPL?
  a. 175
  b. 182
  c. 157\n`,
    answer: `a`
}
//Level2 Cricket
var CL2_queOne = {
    question: `Who is the most expensive player in IPL 2020?
    a.Glenn Maxwell
    b.Pat Cummins
    c.Chris Morris\n`,
    answer: `b`
}
var CL2_queTwo = {
    question: `Mohammed Shami played just four matches at the 2019 World Cup. How many hauls of at least four wickets did he take?
    a.Three
    b.Two
    c.Four\n`,
    answer: `a`
}
var CL2_queThree = {
    question: `Who hit the most 50-plus scores at the 2019 World Cup?
    a.Rohith Sharma
    b.Shakib Al Hasan
    c.Kane Williamson\n`,
    answer: `b`
}
var CL2_queFour = {
    question: `Which opening pair had the most 100-run partnerships at the 2019 World Cup?
    a.David Warner and Aaron Finch
    b.Rohith Sharma and KL Rahul
    c.Jason Roy and Jonny Bairstow\n`,
    answer: `c`
}
//Level3 Cricket
var CL3_queOne = {
    question: `Who is the highest run scorer in IPL 2020?
    a.Shikar Dhawan
    b.David Warner
    c.KL Rahul\n`,
    answer: `c`
}
var CL3_queTwo = {
    question: `Which rule is about splitting the power play (BBL2020)?
    a.X-Factor
    b.Power Surge
    c.Bash Boost\n`,
    answer: `b`
}
var CL3_queThree = {
    question: `Who has most centuries in IPL?
    a.Virat Kohli
    b.Chris Gayle
    c.Virender Sehwag\n`,
    answer: `b`
}
var CL3_queFour = {
    question: `Which rule is about giving extra point after 10th over mark (BBL2020)?
    a.X-Factor
    b.Power Surge
    c.Bash Boost\n`,
    answer: `c`
}
var cricketLevelOne = [CL1_queOne, CL1_queTwo, CL1_queThree, CL1_queFour];
var cricketLevelTwo = [CL2_queOne, CL2_queTwo, CL2_queThree, CL2_queFour];
var cricketLevelThree = [CL3_queOne, CL3_queTwo, CL3_queThree, CL3_queFour];
// Level1 random
var RL1_queOne = {
    question:
        `What's the unit of Power?
  a. Watt
  b. Joules
  c. Ohms\n`,
    answer: `a`
}
var RL1_queTwo = {
    question:
        `What's the value of PI?
  a. 3.14
  b. 3.15
  c. 3.16\n`,
    answer: `a`
}
var RL1_queThree = {
    question: `When was the first Coronavirus case reported in India?
  a. 22nd January,2020
  b. 30th January,2020
  c. 1st February,2020\n`,
    answer: `b`
}
var RL1_queFour = {
    question: `The highest temperature ever recorderd was?
  a. 111F
  b. 138F
  c. 136F\n`,
    answer: `c`
}
//Level2 random
var RL2_queOne = {
    question: `What's the longest six in IPL 2020?
    a.109m
    b.106m
    c.102m\n`,
    answer: `b`
}
var RL2_queTwo = {
    question: `What is the most used letter in English language?
    a. A
    b. I
    c. E\n`,
    answer: `c`
}
var RL2_queThree = {
    question: `What's the highest rated webseries?
  a. The Boys
  b. GOT
  c. Breaking Bad\n`,
    answer: `c`
}
var RL2_queFour = {
    question: `Earth is closest to the size of?
    a.Mars
    b.Jupiter
    c.Venus\n`,
    answer: `c`
}
//Level3 random
var RL3_queOne = {
    question: `Who has taken the hat-trick in World-cup 2019?
    a.Jasprit Bumrah
    b.Mohammed Shami
    c.Rashid Khan\n`,
    answer: `b`
}
var RL3_queTwo = {
    question: `Which is the largest country in the world?
    a. India
    b. Russia
    c. Canada\n`,
    answer: `b`
}
var RL3_queThree = {
    question: `Which blood group is called the 'Universal Donor'?
    a.O
    b.AB
    c.B\n`,
    answer: `a`
}
var RL3_queFour = {
    question: `Which rule is about getting replacement player after 10th over mark (BBL2020)?
    a.X-Factor
    b.Power Surge
    c.Bash Boost\n`,
    answer: `a`
}
var randomLevelOne = [RL1_queOne, RL1_queTwo, RL1_queThree, RL1_queFour]
var randomLevelTwo = [RL2_queOne, RL2_queTwo, RL2_queThree, RL2_queFour];
var randomLevelThree = [RL3_queOne, RL3_queTwo, RL3_queThree, RL3_queFour];
//HighScore Arrays for each category
var gotHighScores = [
  {
    name:"Ram",
    score:38
  },
  {
    name:"Saki",
    score:28
  },
  {
    name:"Sarah",
    score:30
  },
  {
    name:"Parthiv",
    score:14
  },
];
var cricketHighScores = [
  {
    name:"Pranav",
    score:36
  },
  {
    name:"Saki",
    score:28
  },
  {
    name:"Bunny",
    score:30
  },
  {
    name:"Kishore",
    score:14
  },
];
var randomHighScores = [
  {
    name:"Srikar",
    score:30
  },
  {
    name:"Dinesh",
    score:28
  },
  {
    name:"Saketh",
    score:12
  },
  {
    name:"Naaga",
    score:14
  },
];
//Arrays for each category
var gotQuiz = [gotL1,gotL2,gotL3];
var cricketQuiz = [cricketLevelOne,cricketLevelTwo,cricketLevelThree];
var randomQuiz = [randomLevelOne,randomLevelTwo,randomLevelThree]
//Scores corresponding to each level
levelScores = [2,3,5];
//Fuction to startQuiz
function startQuiz(question,answer,lvlScore,highScores){
  var userAnswer = readLineSync.question(question);
  if(answer===userAnswer.toLowerCase().trim()){
    console.log(chalk.bold(chalk.green('Right')));
    highScores[highScores.length-1].score += lvlScore;
  }
  else{
    console.log(chalk.bold(chalk.red('Wrong')));
  }
  console.log('Score :',highScores[highScores.length-1].score);
  console.log('----------------------');
}

maxLevelReached = false;
secondLvlReached = false;
//function to PlayQuiz
function playQuiz(level,quiz,highScores){
  var queSet;
  if(level===1){
    console.log(chalk.bgCyan('----Level 1----'));
    queSet = quiz[0];
    lvlScore = levelScores[0];
    maxLevelReached = false;
    secondLvlReached = false;
  }
  else if(level===2){
    queSet = quiz[1];
    lvlScore = levelScores[1];
    secondLvlReached = true;
    maxLevelReached = false;
  }
  else{
    queSet = quiz[2];
    lvlScore = levelScores[2];
    maxLevelReached = true;
    secondLvlReached = true;
  }
  for(var i=0;i<queSet.length;i++){
    startQuiz(queSet[i].question,queSet[i].answer,lvlScore,highScores);
  }
  //Checking if the user is eligible for Level-2
  if(highScores[highScores.length-1].score>=6 && !maxLevelReached && !secondLvlReached){
    readLineSync.keyInPause(chalk.bgYellow(chalk.black('Level 2 is about to start')));
    console.log(chalk.bgCyan('----Level 2----'));
    playQuiz(2,quiz,highScores);
  }
  //Checking if the user is eligible for Level-3
  else if(highScores[highScores.length-1].score>=16 && !maxLevelReached){
    readLineSync.keyInPause(chalk.bgRed(chalk.black('Level 3 is about to start')));
    console.log(chalk.bgCyan('----Level 3----'));
    playQuiz(3,quiz,highScores);
  }
  else{
    return;
  }
}
//Function to check if the User has beaten the highscore
function hasBeatenScore(userScore,highScores){
  var maxScore = 0;
  for(var i=0;i<highScores.length-1;i++){
    if(highScores[i].score>=maxScore){
      maxScore = highScores[i].score;
    }
  }
  return userScore>maxScore;
}
//Function to display the leaderBoard
function displayLeaderBoard(highScores){
  if(!maxLevelReached){
    console.log(chalk.red(`You couldn't reach another level, ${user}...\nBetter Luck Next Time!`));
  }
  var newUserScore = highScores[highScores.length - 1].score;
  //Checking if user has beaten the highScore
  var isBeaten = false;
  if(hasBeatenScore(newUserScore,highScores)){
    isBeaten = true;
  }
  //Sorting highScores based on the score
  highScores.sort((a,b)=>{
    return b.score - a.score;
  });
  //Printing the scores
  console.log(chalk.bgWhite(chalk.black('--------- Leaderboard ---------')));
  for(var x=0;x<highScores.length;x++){
    if(highScores[x].name===user){
      console.log(chalk.yellow(`${highScores[x].name} : ${highScores[x].score}`));
    }
    else{
    console.log(`${highScores[x].name} :  ${highScores[x].score}`);
    }
  }
  console.log();
  //Printing the high score message if user has beaten the high score
  if(isBeaten){
    console.log(chalk.bgGreen(chalk.black(`Congratulations!! ${user} ,you're the high scorer!`)));
  }
}

var userExit = false;
var user = '';
//Starting the QuizApp
function startApp(){
  //Taking UserName
  if(user===''){
    user = readLineSync.question('Your name, please: ');
  }
  console.log('\nWelcome, '+chalk.yellow(user)+'\n');
  //Displaying the categories
  console.log('---Question Topics---');
  topics = ['GameOfThrones[GOT]', 'Cricket', 'General'];
  choice = readLineSync.keyInSelect(topics, `Enter your choice, ${user}`,{cancel:"Exit"});
  if(choice===0){
    console.log(chalk.bgYellow('---------------HOW WELL DO YOU KNOW G.O.T----------------'));
    gotHighScores.push({
      name:user,
      score:0
    });
    readLineSync.keyInPause(chalk.bgBlue('Level 1 is about to start'));
    playQuiz(1,gotQuiz,gotHighScores);
    displayLeaderBoard(gotHighScores);
  }
  else if(choice===1){
    console.log(chalk.bgYellow('------------CHECK YOUR KNOWLEDGE ON CRICKET------------'));
    cricketHighScores.push({
      name:user,
      score:0
    });
    readLineSync.keyInPause(chalk.bgMagenta('Level 1 is about to start'));
    playQuiz(1,cricketQuiz,cricketHighScores);
    displayLeaderBoard(cricketHighScores);
  }
  else if(choice===2){
    console.log(chalk.bgYellow('-----------------CHECK YOUR KNOWLEDGE-----------------'));
    randomHighScores.push({
      name:user,
      score:0
    });
    readLineSync.keyInPause(chalk.bgGreen(chalk.black('Level 1 is about to start')));
    playQuiz(1,randomQuiz,randomHighScores);
    displayLeaderBoard(randomHighScores);
  }
  else{
    var res = readLineSync.keyInYN(chalk.red('Do you want to exit?'));
    if(res===true){
      userExit = true;
      return;
    }
    else{
      startApp();
    }
  }
}
//Main Code
console.log(chalk.bgYellow('------------------------QUIZAPP-------------------------'));
console.log();
console.log(chalk.inverse('In Level 1 For each right answer you will be awarded +2 \nIn Level 2 For each right answer you will be awarded +3 \nIn Level 3 For each right answer you will be awarded +5 \n'));
console.log(chalk.bgRed('For answering just enter the option -> a (or) b (or) c \n'));


//console.log(chalk.red("**People who doesn't know me can make a guess**"));
//Starting the app
startApp();
//Asking the user if they want to try again
//Here attempt is one as the user has already played one time
var attempt = 1
//Since there are three categories , checking only <3
while(attempt<3 && !userExit){
  var userResponse = readLineSync.keyInYN('Do you want to try one more category?');
  if(userResponse===true){
    startApp();
  }
  else{
    break;
  }
  attempt+=1
}
console.log(chalk.yellow(`Thankyou for playing, ${user}`));