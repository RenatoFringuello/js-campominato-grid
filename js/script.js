function createElement(tagName, className = '', content = ''){
    const element = document.createElement(tagName);
    element.className = className;
    element.append(content);
    return element;
}

/**
 * 
 * @param {*} n number of cell to create, must be the pow of a number
 * @param {*} obj parent to create cells into
 */
function createGame(n, obj){
    for (let i = 0; i < n; i++) {
        const cell = createElement('div', 'd-flex text-center cell');
        let cellWidth = obj.clientWidth / Math.sqrt(n) - cell.style.borderWidth;
        let cellHeight = obj.clientWidth / Math.sqrt(n) - cell.style.borderWidth;
        cell.style.width = cellWidth + 'px';
        cell.style.height = cellHeight + 'px';
        cell.append(createElement('span', 'm-auto', i + 1));

        obj.append(cell);
    }
}

const game = document.getElementById('game');
const gameField = createElement('div', 'd-flex flex-wrap m-auto game-field');
game.append(gameField);

createGame(100, gameField);


