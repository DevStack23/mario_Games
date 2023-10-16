Console.log("Hello welcome to my App");

// noted 
function moveObstacle(obstacle) {
    var obstaclePos = gameContainerWidth;
    obstacle.style.left = obstaclePos + "px"; // set initial position
  
    var obstacleTimer = setInterval(function () {
      if (obstaclePos < -60) {
        obstacle.style.display = "none";
        obstaclePos = gameContainerWidth;
        setTimeout(() => {
          obstacle.style.display = "block";
        }, 100);
        gameScore++;
        score.innerText = gameScore;
      } else if (checkCollision(obstaclePos) && marioJumping) {
        obstaclePos -= 10; // increase speed
      } else if (checkCollision(obstaclePos) && !marioJumping) {
        clearInterval(obstacleTimer);
        score.innerText = "Game Over! Score: " + gameScore;
        gameOverMessage.style.display = "block";
        finalScoreValue.innerText = gameScore;
        gameOverScreen.style.display = "block";
        obstacles.forEach(function (obstacle) {
          obstacle.style.animationPlayState = "paused";
        });
      } else {
        obstaclePos -= 10; // increase speed
      }
  
      obstacle.style.left = obstaclePos + "px";
    }, Math.random() * (200 - 50) + 50);
  }
  