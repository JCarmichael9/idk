//Get user name
let userName = prompt('Hello buddy. what is your name?')
//unput username to website
userName ? document.getElementById('greeting').innerText=`Hello, ${userName}` : document.getElementById('greeting').innerText='Why did you not tell me your name.'




function shakeMagic8Ball(){

//Get user question
let userQuestion = 'Is Hank short?'

userQuestion ? console.log(`${userName} asked, ${userQuestion}.`) : console.log('No question asked.')

//DO NOT TOUCH THS CODE!
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;

    case 1:
    eightBall = 'It is decidedly so';
    break;

    case 2:
    eightBall = 'Reply hazy try again';
    break;

    case 3:
    eightBall = 'Cannot predict now';
    break;

    case 4:
    eightBall = 'Do not count on it';
    break;

    case 5:
    eightBall = 'My sources say no';
    break;

    case 6:
    eightBall = 'Outlook not so good';
    break;

    case 7:
    eightBall = 'Signs point to yes';
    break;

  // Add more cases for 1 to 7
  default:
    eightBall = 'Error';
}

console.log(eightBall)

}
