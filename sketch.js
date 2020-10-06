var moving_rect;
var rect;

var edges;


function setup() {
  createCanvas(800, 400);
  edges = createEdgeSprites();

  moving_rect = createSprite(400, 0, 100, 50);
  moving_rect.shapeColor = "cyan";
  moving_rect.velocityY = 3;
  rect = createSprite(400, 400, 100, 50);
  rect.shapeColor = "lime";
  rect.velocityY = -3;
}

function draw() {
  background(0);

  //moving_rect.x = mouseX;
  //moving_rect.y = mouseY;

  if (moving_rect.x - rect.x <= moving_rect.width / 2 + rect.width / 2 && rect.x - moving_rect.x <= moving_rect.width / 2 + rect.width / 2) {
    moving_rect.velocityX = moving_rect.velocityX * (-1);
    rect.velocityX = rect.velocityX * (-1);
    rect.shapeColor = "red";
    moving_rect.shapeColor = "red";

  }

  if (moving_rect.y - rect.y <= moving_rect.height / 2 + rect.height / 2 && rect.y - moving_rect.y <= moving_rect.height / 2 + rect.height / 2) {
    moving_rect.velocityY = moving_rect.velocityY * (-1);
    rect.velocityY = rect.velocityY * (-1);
    rect.shapeColor = "red";
    moving_rect.shapeColor = "red";

  } else {
    moving_rect.shapeColor = "cyan";
    rect.shapeColor = "lime";
  }

  moving_rect.bounceOff(edges);
  rect.bounceOff(edges);


  drawSprites();
}