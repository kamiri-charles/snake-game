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
	const menu = document.getElementById('menu');
	let running = false;

	document.addEventListener('keydown', evt => {
		if (evt.key == 'Enter' || evt.code == 'Space' || evt.key == ' ') {
			menu.style.display = 'none';
			running = true;
		}
	})

	const snake = new Snake();
	let foods = [];
	let effects = [];

	// Generate food
	for (let i = 0; i <= globals.FOOD_COUNT; i++) {
		foods.push(new Food());
	};
	
	const animate = () => {
		ctx.fillStyle = "rgba(135, 206, 235, 0.3)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		if (running) {
			snake.render(ctx);
			foods.forEach(food => food.render(ctx));
			
			
			// Collision
			foods.forEach(food => {
				let dist = Math.hypot((snake.x - food.x), (snake.y - food.y));
				if (dist <= snake.radius + food.radius) {
					effects.push(new FoodEffect(food.x, food.y));
					food.randomize_pos();
				}
			});
	
			effects.forEach(effect => effect.render(ctx));
			effects = effects.filter(effect => !effect.marked_for_deletion);
		};

		


		requestAnimationFrame(animate);
	};
	
	animate();
	
});