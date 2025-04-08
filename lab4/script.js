document.getElementById('guessFOrm').addEventListener('submit', function(event) {
  event.preventDefault();

  const ramdomNumber = Math.floor(Math.ramdom()* 100);

  const userGuess = parseInt(document.getElementById('guessInput').value);

  const resultElement = document.getElementById('result');

  if (userGuess == ramdomNumber) {
    resultElement.textContent = "Parabens voce acertou!";
    resultElement.style.color = "green";
    document.getElementById('guessInput').style.setProperty("background-color", "white");

  }else{
    resultElement.textContent = "Erro, tente novamente";
    resultElement.style.color = "red"
    document.getElementById('guessInput').style.setProperty("background-color", "red");
  }
});