const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const navbar = document.querySelector("nav");

canvas.width = navbar.clientWidth;
canvas.height = navbar.clientHeight;

class Particle {
    constructor(x, y, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ed1c24";
        ctx.fill();
    }
}

const particles = [];
const numParticles = 450;

for (let i = 0; i < numParticles; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = (Math.random() - 0.9) * 0.2;
    const speedY = (Math.random() - 0.5) * 1.2;
    particles.push(new Particle(x, y, speedX, speedY));
}

const workshopDetails = "Workshop\n\n\nDetails"; // Added line break
const workshopFont = "120px Monoton, cursive";
const workshopColor = "#ffffff"; // White color

function drawWorkshopDetails() {
    ctx.font = workshopFont;
    ctx.fillStyle = workshopColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"; // Center vertically
    const lines = workshopDetails.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const yPos = canvas.height / 2 + (i - (lines.length - 1) / 2) * 60; // Adjusted vertical position
        ctx.fillText(lines[i], canvas.width / 2, yPos);
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of particles) {
        particle.update();
        particle.draw();
    }

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 110) {
                ctx.strokeStyle = "#0058a2";
                ctx.lineWidth = 0.2;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    drawWorkshopDetails(); // Move text rendering to the end
}

animate();


