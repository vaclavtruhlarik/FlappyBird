const obstacles_array = [];
const swetter = new Image();
swetter.src = "flyswetter.png";
const swetter_height = 144;

class Obstacle {
    constructor() {
        this.top = Math.random() * (swetter_height - 20) + 20;
        this.bottom = Math.random() * (swetter_height - 20) + 20;
        this.x = canvas.width;
        this.width = 36;
        this.color = "hsl(" + hue + ", 100%, 50%)";
        this.counted = false;
    }

    draw() {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.scale(1, -1);
        ctx.drawImage(swetter, this.x - 6, -this.top);
        ctx.scale(1, -1);
        // ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
        ctx.drawImage(swetter, this.x - 6, canvas.height - this.bottom);
    }

    update() {
        this.x -= gamespeed;
        if (!this.counted && this.x < bird.x) {
            score++;
            this.counted = true;
        }
        this.draw();
    }
}

function handleObstacles() {
    if (frame % 150 == 0) {
        obstacles_array.unshift(new Obstacle());
    }
    for (let i = 0; i < obstacles_array.length; i++) {
        obstacles_array[i].update();
    }

    if (obstacles_array[obstacles_array.length - 1].x < 0 - obstacles_array[obstacles_array.length - 1].width) {
        obstacles_array.pop(obstacles_array[0]);
    }
}
