//Get user name
let userName = prompt("Hello buddy. what is your name?");

let responseImg = document.getElementById("response-img");
let responseText = document.getElementById("response-text");
let greeting = document.getElementById("greeting");

//unput username to website
userName
  ? (greeting.innerText = `Hello, ${userName}`)
  : (greeting.innerText = "Why did you not tell me your name.");

function shakeMagic8Ball() {
  //Get user question
  let userQuestion = prompt(
    "What question to want to ask to the most amazing, glorious, respectable, smart, bright, and handsome 8 ball?"
  );

  //DO NOT TOUCH THS CODE!
  let randomNumber = Math.floor(Math.random() * 8);

  let eightBall = "";
  let imageChoice = "";
  switch (randomNumber) {
    case 0:
      eightBall = "It is certain";
      imageChoice = "imgs/certain.jpg";
      break;

    case 1:
      eightBall = "It is decidedly so";
      imageChoice = "imgs/decide.jpg";
      break;

    case 2:
      eightBall = "Reply hazy try again";
      imageChoice = "imgs/ask.jpg";
      break;

    case 3:
      eightBall = "Cannot predict now";
      imageChoice = "imgs/predict.jpg";
      break;

    case 4:
      eightBall = "Do not count on it";
      imageChoice = "imgs/count.jpg";
      break;

    case 5:
      eightBall = "My sources say no";
      imageChoice = "imgs/sources.png";
      break;

    case 6:
      eightBall = "Outlook not so good";
      imageChoice = "imgs/outlook.jpg";
      break;

    case 7:
      eightBall = "Signs point to yes";
      imageChoice = "imgs/signs.jpg";
      break;

    // Add more cases for 1 to 7
    default:
      eightBall = "Error";
  }

  console.log(eightBall);

  userName
    ? (document.getElementById(
        "response-text"
      ).innerText = `${userName} has asked "${userQuestion}" to the most amazing, glorious, respectable, smart, bright, and handsome 8 ball. It's absolutely perfect, never wrong, always correct, never a lie, always a truth answer is, "${eightBall}".`)
    : (document.getElementById(
        "response-text"
      ).innerText = `Bum who won't tell me their name has asked "${userQuestion}" to the most amazing, glorious, respectable, smart, bright, and handsome 8 ball. It's absolutely perfect, never wrong, always correct, never a lie, always a truth answer is, "${eightBall}."`);

  responseImg.src = imageChoice;
}
