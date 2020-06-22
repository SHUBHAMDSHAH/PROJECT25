function setup() {
  createCanvas(800,400);
   raindrop1 = createSprite(400, 0, 3,20);
   raindrop2 = createSprite(100, 0, 3,20);
   raindrop3 = createSprite(200, 0, 3,20);
   raindrop4 = createSprite(300, 0, 3,20);
   raindrop5 = createSprite(500, 0, 3,20);
   raindrop6 = createSprite(600, 0, 3,20);
   raindrop7 = createSprite(700, 0, 3,20);
   raindrop8 = createSprite(800, 0, 3,20);
   raindrop9 = createSprite(450, 0, 3,20);
   raindrop10 = createSprite(150,0, 3,20);

   raindrop1.velocityY = 2;
   raindrop2.velocityY = 2;
   raindrop3.velocityY = 2;
   raindrop4.velocityY = 2;
   raindrop5.velocityY = 2;
   raindrop6.velocityY = 2;
   raindrop7.velocityY = 2;
   raindrop8.velocityY = 2;
   raindrop9.velocityY = 2;
   raindrop10.velocityY = 2;


   raindrop1.random = 10,20
}

function draw() {
  background(255,255,255);  

  drawSprites();
}