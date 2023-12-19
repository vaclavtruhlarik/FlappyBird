const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

let space_pressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const background = new Image();
background.src = "kitchen.png";
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height,
};
function handleBackground() {
    if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else BG.x2 -= gamespeed;
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
    const c = 0;
    ctx.fillStyle = "rgba(" + c + ", " + c + ", " + c + ", 50%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, 10, 50, 50);
    handleBackground();
    // handleParticles();
    bird.update();
    bird.draw();
    handleObstacles();
    ctx.fillStyle = "white";
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    if (handleCollisions()) return;
    angle += 0.1;
    hue += 1;
    frame++;
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function (e) {
    if ((e.code = "Space")) space_pressed = true;
});

window.addEventListener("keyup", function (e) {
    if (e.code == "Space") space_pressed = false;
});

const bang = new Image();
bang.src = "bang.png";
function handleCollisions() {
    for (let i = 0; i < obstacles_array.length; i++) {
        const o = obstacles_array[i];
        if (
            bird.x < o.x + o.width &&
            bird.x + bird.width > o.x &&
            ((bird.y < 0 + o.top && bird.y + bird.height > 0) ||
                (bird.y < canvas.height - o.bottom + o.bottom && bird.y + bird.height > canvas.height - o.bottom))
        ) {
            // collision
            ctx.drawImage(bang, bird.x - (50 - bird.width / 2), bird.y - (50 - bird.height / 2), 100, 100);
            ctx.font = "25px Georgia";
            ctx.fillStyle = "white";
            ctx.fillText("Game over, your score is " + score, 160, canvas.height / 2 - 20);
            return true;
        }
    }
}
