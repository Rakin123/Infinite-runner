function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 30 === 0) {
      var cloud = createSprite(width,height/1.667,40,10);
      cloud.x = trex.x + width/1.091
      cloud.y = Math.round(random(height/2.5,height/1.6667));
      cloud.addImage(cloudImage);
      cloud.scale = 0.9;
      //cloud.velocityX = 0;
  
      
       //assign lifetime to the variable
      cloud.lifetime = 300;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
  }
  