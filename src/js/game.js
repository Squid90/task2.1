import Character from './domain.js';

class Game {
    start() {
      console.log('game started');
    }
}

export default Game;

export class GameSavingData {
}

 function readGameSaving() {
}

export function loadGame () {
    readGameSaving();
} 

function writeGameSaving() {
}

export function saveGame () {
    writeGameSaving();
} 