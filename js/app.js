let prNum, tempOut;
prNum = Math.round(Math.random() * 10);
let count = 3;

function guessNum() {
  let out = document.getElementById('out');
  if (count == 0) {
    out.innerHTML = 'Попытки кончились 	&#128556;'
    return;
  }
  let num = document.getElementById('guessInput').value;

  if (num == prNum) {
    out.innerHTML = 'Вы угадали!&#128079;'
  } else if (num > 10 || num < 0) {
    out.innerHTML = 'Введите число от 0 до 10'
  } else if (num > prNum) {
    out.innerHTML = 'Вы ввели число больше!&#10134;'
  } else if (num < prNum) {
    out.innerHTML = 'Вы ввели число меньше!&#10133;'
  }
  count--;
}