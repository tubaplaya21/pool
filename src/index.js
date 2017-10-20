import Ball from './ball';

var canvas = document.createElement('canvas');
canvas.width = 760;
canvas.height = 480;
var context = canvas.getContext('2d');
document.body.appendChild(canvas);

var balls = []
balls[15] = new Ball(15, {x: 732, y: 266});
balls[0] =  new Ball(1,  {x: 266, y: 266});
balls[1] =  new Ball(2,  {x: 240, y: 250});
balls[8] =  new Ball(8,  {x: 240, y: 281});
balls[9] =  new Ball(9,  {x: 212, y: 236});
balls[7] =  new Ball(7,  {x: 212, y: 266});
balls[2] =  new Ball(2,  {x: 212, y: 298});
balls[3] =  new Ball(3,  {x: 185, y: 218});
balls[10] = new Ball(10, {x: 185, y: 250});
balls[4] =  new Ball(4,  {x: 185, y: 282});
balls[11] = new Ball(11, {x: 185, y: 314});
balls[12] = new Ball(12, {x: 157, y: 205});
balls[5] =  new Ball(5,  {x: 157, y: 236});
balls[13] = new Ball(13, {x: 157, y: 266});
balls[6] =  new Ball(6,  {x: 157, y: 297});
balls[14] = new Ball(14, {x: 157, y: 328});

function update() {
  // Moving all balls
  balls.forEach((ball) => {
    ball.update();
  });
  // Brute force collision detection
  for(var i = 0; i < 16; i++) {
    for(var j = i + 1; j < 16; j++) {
      let a = balls[i].getPosition();
      let b = balls[j].getPosition();
      if(900 > Math.pow(a.x-b.x, 2) + Math.pow(a.y-b.y, 2)) {
        balls[i].setColor('red');
        balls[j].setColor('red');
      } else {
        balls[i].setColor('gray');
        balls[j].setColor('red');
      }
    }
  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    ball.render(context);
  });
}

function loop() {
  update();
  render();
}

setInterval(loop, 1/30000);

balls[15].setVelocity({x: -0.1, y:0})
