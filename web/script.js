const flower = document.getElementById("flower");
const balls = document.getElementById("balls");

function bloom() {
  flower.style.opacity = 1;
  flower.style.transform = "scale(1)";
}

function rotate() {
  for (let i = 0; i < balls.children.length; i++) {
    const ball = balls.children[i];
    ball.style.transform = `rotate(${(i * 360) / balls.children.length}deg)`
  }
}

window.onload = bloom;
window.setInterval(rotate, 1000);

