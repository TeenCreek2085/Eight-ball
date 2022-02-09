const btnQuestion = document.querySelector('.get-btn');
const btnNewQuestion = document.querySelector('.new-get-btn');
const ball = document.querySelector('.ball');
const answer = document.querySelector('.answer');

const options = [
  'Signs point to yes',
  'It is decidedly so',
  'Reply hazy try again',
  'Cannot predict now',
  'Do not count on it',
  'My sources say no',
  'Outlook not so good',
  'Signs point to yes',
  'Yes!',
  'No!',
];

const getRandomNumber = arr => Math.floor(Math.random() * arr.length);

const getAnswer = () => {
  const randomAnswer = options[getRandomNumber(options)];
  answer.textContent = randomAnswer;
  btnQuestion.disabled = true;
  btnNewQuestion.disabled = false;
  answer.style.display = 'block';
  ball.classList.remove('shaking');
};

const getNewAnswer = () => {
  ball.classList.add('shaking');
  answer.style.display = 'none';
  btnQuestion.disabled = false;
  btnNewQuestion.disabled = true;
};

btnQuestion.addEventListener('click', getAnswer);
btnNewQuestion.addEventListener('click', getNewAnswer);
