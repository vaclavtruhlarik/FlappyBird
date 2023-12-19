const particle_array = [];

class Particle {
    constructor() {
        this.x = bird.x;
        this.y = bird.y;
        this.size = Math.random() * 7 + 3;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = "hsla(" + hue + ", 100%, 50%, 0.8)";
    }

    update() {
        this.x -= gamespeed;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    particle_array.unshift(new Particle());
    for (let i = 0; i < particle_array.length; i++) {
        particle_array[i].update();
        particle_array[i].draw();
    }
    if (particle_array.length > 200) {
        for (let i = 0; i < 20; i++) {
            particle_array.pop(particle_array[i]);
        }
    }
}
