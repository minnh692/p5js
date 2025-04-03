let salColor;
let showMouth = true; // 턱이 처음부터 보이도록 설정
let mouthY = 210; // 초기 상태에서 턱이 숨겨진 높이
let isGlassesOn = false; // 안경이 처음에는 없음
let xPos;

let i = 0;

function setup() {
  createCanvas(400, 400);
  salColor = color(255, 239, 213);
}

function draw() {
  background(220);
  textSize(25);

  //해와달
  if (mouseX>200) {
    background(240,128,128);
    fill(255,69,0);
  ellipse(mouseX-200,50,30,30);
  }
  else if(mouseX<=200) {
    background(100,0,100);
    fill(211,211,211);
    ellipse(mouseX+200,50,30,30);
    while(i<10) {
      fill(255,250,205);
      ellipse(random(0,400),random(0,400),10,10);
      i +=1;
    }
    
  }
  // 턱과 입을 먼저 그림 > 뒤에 배치되도록 함
  if (showMouth) {
    fill(salColor);
    ellipse(200, mouthY, 150, 180); // 턱
    fill(255, 60, 60);
    ellipse(200, mouthY, 100, 130); // 입
  }

  // 얼굴 요소들 (광대, 눈 등)
  fill(255, 239, 213);
  ellipse(120, 215, 30, 50); // 왼귀
  ellipse(280, 215, 30, 50); // 오른귀
  ellipse(200, 200, 180, 160); // 광대위
  fill(169, 169, 169);
  ellipse(160, 197, 50, 30); // 왼쌍커풀
  ellipse(240, 197, 50, 30); // 오른쌍커풀
  fill(255, 255, 255);
  ellipse(160, 200, 50, 30); // 왼흰자
  ellipse(240, 200, 50, 30); // 오른흰자
  fill(50, 50, 50);
  ellipse(160, 200, 25, 30); // 왼눈동자
  ellipse(240, 200, 25, 30); // 오른눈동자
  fill(139, 69, 19);
  ellipse(220, 260, 7, 7); // 점
  fill(250, 235, 215);
  triangle(200, 200, 215, 245, 185, 245); // 코
  fill(40, 40, 40);
  arc(193, 245, 10, 10, radians(180), radians(360)); // 콧구멍
  arc(207, 245, 10, 10, radians(180), radians(360)); // 콧구멍
  arc(200, 180, 180, 150, radians(180), radians(360)); // 머리
  noStroke();
  fill(255, 239, 213);
  triangle(200, 160, 210, 180, 195, 180); // 머리 특징
  stroke(0, 0, 0);

  // 안경을 그리기
  if (isGlassesOn) {
    rectMode(CENTER);
    strokeWeight(7);
    stroke(0);
    noFill();
    rect(160, 200, 60, 40); // 왼쪽 안경
    rect(240, 200, 60, 40); // 오른쪽 안경
    fill(0, 0, 0);
    rect(200, 185, 20, 3); // 안경 가운데
    rect(120, 190, 20, 3); // 왼쪽 다리
    rect(280, 190, 20, 3); // 오른쪽 다리
    fill(255, 255, 255);
    strokeWeight(1);
    text("안경을 쓴 나", 200, 30);
  } else {
    fill(255, 255, 255);
    text("안경을 벗은 나", 200, 30);
  }
  

  strokeWeight(1);
}

// 키 입력을 감지해서 턱과 입을 유지 또는 숨김
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    mouthY = 230; // 턱과 입을 아래로 이동
  } else if (keyCode === UP_ARROW) {
    mouthY = 210; // 턱과 입을 위로 이동하여 숨기기
  } else if (key === 'g') {
    isGlassesOn = !isGlassesOn; // G키를 누를 때마다 안경 나왔다 없애기
  }
  
  
  
  
}
