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

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(10, 10, 50, 50);
    bird.update();
    bird.draw();
    angle += 0.1;
    hue += 1;
    handleParticles();
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function (e) {
    if ((e.code = "Space")) space_pressed = true;
});

window.addEventListener("keyup", function (e) {
    if (e.code == "Space") space_pressed = false;
});
