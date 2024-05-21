const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};
let score = 0;
let d;

document.addEventListener('keydown', direction);

function direction(event) {
    if (event.keyCode === 37 && d !== 'RIGHT') {
        d = 'LEFT';
    } else if (event.keyCode === 38 && d !== 'DOWN') {
        d = 'UP';
    } else if (event.keyCode === 39 && d !== 'LEFT') {
        d = 'RIGHT';
    } else if (event.keyCode === 40 && d !== 'UP') {
        d = 'DOWN';
    }
}

function collision(newHead, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'lightgreen';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? 'darkgreen' : 'green';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d === 'LEFT') snakeX -= box;
    if (d === 'UP') snakeY -= box;
    if (d === 'RIGHT') snakeX += box;
    if (d === 'DOWN') snakeY += box;

    // Wrap snake position horizontally on edge collision
    if (snakeX < 0) snakeX = canvas.width - box;
    if (snakeX >= canvas.width) snakeX = 0;
    // Wrap snake position vertically on edge collision
    if (snakeY < 0) snakeY = canvas.height - box;
    if (snakeY >= canvas.height) snakeY = 0;

    if (snakeX === food.x && snakeY === food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (collision(newHead, snake)) {
        clearInterval(game);
        alert('Game Over');
    }

    snake.unshift(newHead);

    ctx.fillStyle = 'white';
    ctx.font = '45px Changa one';
    ctx.fillText(score, 2 * box, 1.6 * box);
}

let game = setInterval(draw, 100);