function createElement(tagName, className = ''){
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

/**
 * 
 * @param {*} n number of cell to create, must be the pow of a number
 * @param {*} obj parent to create cells into
 */
function createGame(n, obj){
    for (let i = 0; i < n; i++) {
        const cell = createElement('div', 'd-flex cell');
        let cellWidth = obj.clientWidth / Math.sqrt(n) - 2;
        cell.style.width = cellWidth + 'px';
        obj.append(cell);
    }
}

const game = document.getElementById('game');
const gameField = createElement('div', 'd-flex flex-wrap m-auto game-field');
game.append(gameField);

createGame(100, gameField);


