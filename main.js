// Hearts animation
const colors = ["pink", "red", "orange", "white", "#ff69b4"];
const container = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const size = Math.random() * 30 + 10;
  heart.style.width = heart.style.height = size + 'px';
  heart.style.left = Math.random() * 100 + '%';
  heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Stars
const starsCanvas = document.getElementById("stars");
const ctx = starsCanvas.getContext("2d");

function resizeStarsCanvas() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
}
resizeStarsCanvas();
window.addEventListener("resize", resizeStarsCanvas);

function drawStars() {
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * starsCanvas.width;
    const y = Math.random() * starsCanvas.height;
    const r = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255," + (Math.random()*0.8+0.2) + ")";
    ctx.fill();
  }
}
setInterval(drawStars, 800);

// Typewriter text
const text = `[Happy Birthday, dear Celuny,  
a beacon in my life's grand sea.  
You mean so much, truly, profoundly,  
my precious friend, for all to see.

And beyond the bond of friendship's grace,  
you shine so bright, in every space.  
My precious girl, with heart so pure,  
a gentle soul, of whom I'm sure.

May this new year, with skies so vast,  
bring endless joy, a joy to last.  
May grand adventures find your way,  
each rising sun, a brighter day.

Happy Birthday sweet Celuny,  
may life’s best gifts now come to thee.]`;

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = () => {
  typeWriter();
};
