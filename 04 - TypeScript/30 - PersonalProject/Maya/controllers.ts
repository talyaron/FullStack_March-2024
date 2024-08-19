function SnakeGrow(snake: Snake, food: Food) {
  try {
    if (snake.checkCollision(food)) {
      snake.grow();
      food.generateNewPosition()
      console.log("Snake grew successfully.");
    }
  } catch (error) {
    console.error("Error while growing the snake: ", error);
  }
}




