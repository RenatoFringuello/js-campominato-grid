function createElement(tagName, className = ''){
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

const game = document.getElementById('game');
const gameField = createElement('div', 'd-flex ciao');
game.append(gameField);

// for (let i = 0; i < 10; i++) {
//     const cell = createElement('div', 'd-flex');
// }


