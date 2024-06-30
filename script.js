document.getElementById('mycute-guess-button').addEventListener('click', function() {
    const mycuteGuessInput = document.getElementById('mycute-guess-input').value;
    const mycuteGuess = parseInt(mycuteGuessInput);
    
    if (isNaN(mycuteGuess) || mycuteGuess < 1 || mycuteGuess > 6) {
      alert('Please enter a valid number between 1 and 6.');
      return;
    }
  
    const mycuteDiceRoll = Math.floor(Math.random() * 6) + 1;
    const mycuteDiceImage = document.getElementById('mycute-dice-image');
    
   
    mycuteDiceImage.classList.add('rotate');
    

    setTimeout(function() {
      mycuteDiceImage.classList.remove('rotate');
      
    }, 1000);
  
    const mycuteResult = document.getElementById('mycute-result');
    if (mycuteGuess === mycuteDiceRoll) {
      mycuteResult.textContent = "Congratulations! You guessed it right!";
      mycuteResult.style.color = "green";
    } else {
      mycuteResult.textContent = `Oops! The correct number was ${mycuteDiceRoll}. Try again!`;
      mycuteResult.style.color = "red";
    }
  });
  