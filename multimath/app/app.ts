function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to mutimath! starting a new game...! ';

}

document.getElementById('startGame')!.addEventListener('click', startGame);