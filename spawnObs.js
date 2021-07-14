function spawnObstacles(){
    if (frameCount % 30 === 0){
      var obstacle = createSprite(width,height/1.1 ,10,40);
      obstacle.x = trex.x + width/1.091
      //console.log(trex.x)
      //obstacle.velocityX = -(6 + score/100);
      obstacle.addImage(obstacle3);
       /*generate random obstacles
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
         case 3: obstacle.addImage(obstacle3);
                 break;
         case 4: obstacle.addImage(obstacle4);
                 break;
         case 5: obstacle.addImage(obstacle5);
                 break;
         case 6: obstacle.addImage(obstacle6);
                 break;
         default: break;
       }*/
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.9;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }
   
   /*function inv() {
    // if(frameCount % 10 === 0){
    // var invisibleGround = createSprite(width/3,190,400,10);
    // invisibleGround.visible = false;
    // }
  }*/