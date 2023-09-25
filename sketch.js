let particles = [];

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("background-container");
  noStroke();
  
  // 创建粒子
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    let color = randomColor();
    particles.push(new Particle(x, y, color));
  }
}


function draw() {
  background(0); // 设置背景颜色为黑色
  
  // 更新和显示粒子
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function randomColor() {
  let r, g, b;
  do {
    r = random(55);
    g = random(55);
    b = random(55);
  } while (g > r && g > b); // 排除绿色（绿色通道大于红色和蓝色通道）
  return color(r, g, b);
}


class Particle {
  constructor(x, y, color) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.2, 0.8));
    this.color = color;
    this.size = random(5, 15);
  }

  update() {
    this.pos.add(this.vel);
    
    // 边界检测
    if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
      this.pos.x = random(width);
      this.pos.y = random(height);
    }
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


