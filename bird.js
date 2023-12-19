const bug = new Image();
bug.src = "bug.png";
class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.original_width = 266;
        this.original_height = 207;
        this.width = this.original_width / 5;
        this.height = this.original_height / 5;
        this.weight = 1;
        this.frame = 0;
    }

    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - 3 * this.height + curve) {
            this.y = canvas.height - 3 * this.height + curve;
            this.vy = 0;
        } else if (this.y < 0 + 3 * this.height + curve) {
            this.y = 0 + 3 * this.height + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (space_pressed) this.flap();
    }

    draw() {
        ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            bug,
            this.frame * this.original_width,
            0,
            this.original_width,
            this.original_height,
            this.x - 30,
            this.y - 20,
            this.width * 1.7,
            this.height * 1.7
        );
        if (frame % 3 == 0) this.frame++;
        if (this.frame >= 14) this.frame = 0;
    }

    flap() {
        this.vy -= 2;
    }
}

const bird = new Bird();
