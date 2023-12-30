import { globals }from "./modules/globals.js";
import Snake from "./modules/snake.js";
import Food from "./modules/food.js";
import FoodEffect from "./modules/effects.js";

document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('canvas');
	canvas.width = globals.GAME_WIDTH;
	canvas.height = globals.GAME_HEIGHT;
	/** @type {CanvasRenderingContext2D} */
	const ctx = canvas.getContext('2d');
	
	
	
	let snake = new Snake();
	let food = new Food();
	let effects = [];
	
	const animate = () => {
		ctx.fillStyle = 'skyblue';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		snake.render(ctx);
		food.render(ctx);
		
		
		// Collision
		let dist = Math.hypot((snake.x - food.x), (snake.y - food.y));
		if (dist <= snake.radius + food.radius) {
			effects.push(new FoodEffect(food.x, food.y));
			food.randomize_pos();
		}

		effects.forEach(effect => effect.render(ctx));
		effects = effects.filter(effect => !effect.marked_for_deletion);
		
		requestAnimationFrame(animate);
	};
	
	animate();
	
	
});