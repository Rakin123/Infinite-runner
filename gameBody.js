function gameBody(){
    //displaying score
  textSize(25)
  text("Score: "+ score, (trex.x - 100) + width/1.33,height/5);
  
  
  if(gameState === PLAY){
   // console.log(frameCount)
    // Invisible sprites
    gameOver.visible = false;
    restart.visible = false;
    trex.changeAnimation("running",trex_running);
        
    // Increases ground speed at a multiple of 100
    //ground.velocityX = -(4 + 3* score/100)

    //scoring
    score = score + Math.round(getFrameRate()/60);


    
    //Checkpoint sound plays at the multiple of 100
    if(score>0 && score%100 === 0){
       checkPointSound.play() 
    }
    
    if (fkground.x < 0){
      fkground.x = fkground.width/2;
    }
    
    fkground.x = trex.x;
    
    fkground.velocityX = (4 + 3* score/100)
    
    //jump when the space key is pressed
    if(keyDown("space")&& trex.collide(invisibleGround)) {
        trex.velocityY = -16  ;
        jumpSound.play();
    }
    
    //add gravity
    trex.velocityY = trex.velocityY + 0.8
    invisibleGround.velocityX = (4 + 3* score/100)
    trex.velocityX = (4 + 3* score/100)
    camera.position.x = trex.x + width/3.5
    
    //spawn obstacles on the ground
    spawnObstacles();

    //spawn the clouds
    spawnClouds();
  
    
    
    if(obstaclesGroup.isTouching(trex)){
        //trex.velocityY = -12;
        //jumpSound.play();
        gameState = END;
        dieSound.play()
        trex.velocityX = 0
        invisibleGround.velocityX = 0
        fkground.velocityX = 0
      
    }
  }
   else if (gameState === END) {
      gameOver.visible = true;
      gameOver.x =  trex.x + width/3.5
      restart.visible = true;
      restart.x =  trex.x + width/3.5
     
     //change the trex animation
      trex.changeAnimation("collided", trex_collided);
    
      //ground and trex stop moving      
      trex.velocityY = 0      
     
      //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
     
     //stop the speed of every sprite in the group
     obstaclesGroup.setVelocityXEach(0);
     cloudsGroup.setVelocityXEach(0);    
   }
  
 
  //stop trex from falling down
  trex.collide(invisibleGround);
  obstaclesGroup.collide(invisibleGround);
  
  if(mousePressedOver(restart)) {
      reset();
    }


  drawSprites();
  
  //cordinates for the x and y position
  fill("black");
  text(mouseX+","+mouseY,trex.x,mouseY);
}