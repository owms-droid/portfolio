document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const main = document.querySelector('main');
    function resizeCanvas() {
        canvas.width = main.offsetWidth;
        canvas.height = main.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext('2d');
    let W = canvas.width, H = canvas.height;
    let particles = [];
    for(let i=0;i<80;i++){
        particles.push({
            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*6+4,
            d: Math.random()*80,
            color: `hsl(${Math.random()*360},80%,60%)`,
            tilt: Math.random()*10-10
        });
    }
    function draw(){
        W = canvas.width;
        H = canvas.height;
        ctx.clearRect(0,0,W,H);
        for(let i=0;i<particles.length;i++){
            let p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, false);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.85;
            ctx.fill();
        }
        update();
    }
    let angle = 0;
    function update(){
        angle += 0.01;
        for(let i=0;i<particles.length;i++){
            let p = particles[i];
            p.y += Math.cos(angle+p.d)+1+p.r/3;
            p.x += Math.sin(angle)+1.2;
            if(p.x > W+20 || p.y > H+20){
                p.x = Math.random()*W;
                p.y = -10;
            }
        }
    }
    setInterval(draw, 20);
});