function createElement(tagName, className){
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

const game = document.getElementById('game');
const gameField = addElement('div', 'd-flex');

game.append(gameField);




