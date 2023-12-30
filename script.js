import { globals }from "./modules/globals.js";
import Snake from "./modules/snake.js";
import Food from "./modules/food.js";

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    canvas.width = globals.GAME_WIDTH;
    canvas.height = globals.GAME_HEIGHT;
    /** @type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext('2d');

    

    let snake = new Snake();
    let food = new Food();

    const animate = () => {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        snake.render(ctx);
        food.render(ctx);


        // Collision
        let dist = Math.hypot((snake.x - food.x), (snake.y - food.y));
        if (dist <= snake.radius + food.radius) {
          food.randomize_pos();
          console.log("Collison detected!");
        }
        
        requestAnimationFrame(animate);
    };

    animate();


});