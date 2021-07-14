// When restart button is clicked
function reset(){
    gameState = PLAY;
    fkground.x = width/3;    
    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();  
    gameOver.visible = false;
    restart.visible = false;  
    score = 0;  
    trex.changeAnimation("running",trex_running);
  
  }