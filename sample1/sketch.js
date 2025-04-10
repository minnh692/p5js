let salColor;
let showMouth = true;
let mouthY = 10;
let isGlassesOn = false;
let isLaserOn = false;
let laserLength = 0;
let maxLaserLength = 300;
let isEarsOn = false;
let rotationAngle = 0;

let trails = [];
let i = 0;

function setup() {
  createCanvas(400, 400);
  salColor = color(255, 239, 213);
}

function draw() {
  background(220);
  textSize(25);

  // 배경
  let c1 = color(240, 128, 128);
  let c2 = color(255, 0, 0);
  let c3 = color(128, 0, 128);
  let c4 = color(0, 0, 0);

  if (mouseX > 200) {
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
  } else {
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(c3, c4, inter);
      stroke(c);
      line(0, y, width, y);
    }
    while (i < 10) {
      fill(255, 250, 205);
      ellipse(random(0, 400), random(0, 400), 10, 10);
      i++;
    }
  }

  // 마우스 잔상
  trails.push({ x: mouseX, y: mouseY, alpha: 255, timestamp: millis() });
  if (trails.length > 100) {
    trails.shift();
  }

  for (let i = trails.length - 1; i >= 0; i--) {
    let t = trails[i];
    fill(t.x >= 200 ? color(255, 0, 0, t.alpha) : color(150, 150, 150, t.alpha));
    stroke(0, 0, 0);
    ellipse(t.x, t.y, 20);
    let elapsed = millis() - t.timestamp;
    t.alpha = map(elapsed, 0, 1000, 255, 0);
    if (t.alpha <= 0) trails.splice(i, 1);
  }

  // 현재 마우스 공
  fill(mouseX >= 200 ? color(255, 0, 0) : color(150));
  ellipse(mouseX, mouseY, 20);

  // 회전 조건
  if (isEarsOn && keyIsDown(85)) {
    rotationAngle += 0.1;
    text("oiiaioiiiai",250,350);
  } else {
    rotationAngle = 0;
  }

  // 얼굴 전체 그리기 (회전 포함)
  push();
  translate(width / 2, height / 2);
  rotate(rotationAngle);

  // 입
  if (showMouth) {
    fill(salColor);
    ellipse(0, mouthY, 150, 180);
    fill(255, 60, 60);
    ellipse(0, mouthY, 100, 130);
  }

  // 얼굴 요소
  fill(255, 239, 213);
  ellipse(-80, 15, 30, 50); // 왼귀
  ellipse(80, 15, 30, 50);  // 오른귀
  ellipse(0, 0, 180, 160); // 얼굴
  fill(169, 169, 169);
  ellipse(-40, -3, 50, 30);
  ellipse(40, -3, 50, 30);
  fill(255);
  ellipse(-40, 0, 50, 30);
  ellipse(40, 0, 50, 30);
  fill(50);
  ellipse(-40, 0, 25, 30); // 왼눈
  ellipse(40, 0, 25, 30);  // 오른눈
  fill(139, 69, 19);
  ellipse(20, 60, 7, 7); // 점
  fill(250, 235, 215);
  triangle(0, 0, 15, 45, -15, 45); // 코
  fill(40);
  arc(-7, 45, 10, 10, radians(180), radians(360));
  arc(7, 45, 10, 10, radians(180), radians(360));
  arc(0, -20, 180, 150, radians(180), radians(360)); // 머리
  noStroke();
  fill(255, 239, 213);
  triangle(0, -40, 10, -20, -5, -20);
  stroke(0);

  // 안경
  if (isGlassesOn) {
    rectMode(CENTER);
    strokeWeight(7);
    stroke(0);
    noFill();
    rect(-40, 0, 60, 40);
    rect(40, 0, 60, 40);
    fill(0);
    rect(0, -15, 20, 3);
    rect(-80, -10, 20, 3);
    rect(80, -10, 20, 3);
    fill(255);
    strokeWeight(1);
    textAlign(CENTER);
    text("안경을 쓴 나", 0, -170);
  } else {
    fill(255);
    textAlign(CENTER);
    text("안경을 벗은 나", 0, -170);
  }

  // 레이저
  if (isLaserOn) {
    laserLength = min(laserLength + 10, maxLaserLength);
    stroke(0, 255, 0);
    strokeWeight(4);
    line(-40, 0, -40 - laserLength * cos(PI / 4), 0 + laserLength * sin(PI / 4));
    line(40, 0, 40 - laserLength * cos(PI / 4), 0 + laserLength * sin(PI / 4));
    strokeWeight(1);
  } else {
    laserLength = 0;
  }

  // 고양이 귀
  if (isEarsOn) {
    fill(150, 150, 150);
    triangle(-90, -90, -55, -80, -90, -40);
    triangle(90, -90, 55, -80, 90, -40);
    fill(255, 250, 250);
    triangle(-85, -85, -65, -75, -85, -50);
    triangle(85, -85, 65, -75, 85, -55);
    text("야옹", -100, -100);
  }

  pop();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    mouthY = 30;
  } else if (keyCode === UP_ARROW) {
    mouthY = 10;
  } else if (key === 'g') {
    isGlassesOn = !isGlassesOn;
  } else if (key === 'l') {
    isLaserOn = !isLaserOn;
  } else if (key === 'c') {
    isEarsOn = !isEarsOn;
  }
}
