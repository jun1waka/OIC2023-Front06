document.addEventListener('DOMContentLoaded', function () {
    let min = 1;
    let max = 100;
    let remainingAttempts = 10;

    const guessElement = document.getElementById('guess');
    const higherButton = document.getElementById('higher');
    const lowerButton = document.getElementById('lower');
    const correctButton = document.getElementById('correct');
    const message = document.getElementById('message');

    let guess = Math.floor((min + max) / 2);
    guessElement.textContent = guess;

    higherButton.addEventListener('click', function () {
        min = guess + 1;
        updateGuess();
    });

    lowerButton.addEventListener('click', function () {
        max = guess - 1;
        updateGuess();
    });

    correctButton.addEventListener('click', function () {
        message.textContent = `コンピュータが正解しました！答えは${guess}でした。`;
        disableButtons();
    });

    function updateGuess() {
        remainingAttempts--;
        if (remainingAttempts === 0) {
            message.textContent = `コンピュータが答えを見つけられませんでした。あなたの勝ちです！`;
            disableButtons();
        } else {
            guess = Math.floor((min + max) / 2);
            guessElement.textContent = guess;
        }
    }

    function disableButtons() {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        correctButton.disabled = true;
    }
});
