import { globals } from "./globals.js";
import Controls from "./controls.js";

export default class Snake {
	constructor() {
		this.x = globals.GAME_WIDTH * 0.5;
		this.y = globals.GAME_HEIGHT * 0.5;
		this.radius = 10;
		this.head_color = 'black';
		this.color = 'black';
		this.controls = new Controls();
		this.speed = globals.SPEED;
		this.velocity = { x: 0, y: 0 };
		this.head = {x: this.x, y: this.y};
		this.body = [{ x: this.x, y: this.y }]; // Initial body with one segment
		
		this.length = 5; // Starting length
	}
	
	update() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		
		// Movement
		if (this.controls.up && this.velocity.y == 0) {
			this.velocity.y = -this.speed;
			this.velocity.x = 0;
		} 

		if (this.controls.right && this.velocity.x == 0) {
			this.velocity.x = this.speed;
			this.velocity.y = 0;
		} 

		if (this.controls.down && this.velocity.y == 0) {
			this.velocity.y = this.speed;
			this.velocity.x = 0;
		}

		if (this.controls.left && this.velocity.x == 0) {
			this.velocity.x = -this.speed;
			this.velocity.y = 0;
		};

		
		// Boundaries
		if (this.x < 0) {
			this.x = globals.GAME_WIDTH;
		} else if (this.x > globals.GAME_WIDTH + this.radius) {
			this.x = 0;
		}
		
		if (this.y < 0) {
			this.y = globals.GAME_HEIGHT;
		} else if (this.y > globals.GAME_HEIGHT + this.radius) {
			this.y = 0;
		}
		
		// Update body segments
		this.head = { x: this.x, y: this.y };
		this.body.unshift({ x: this.x, y: this.y });
		
		// If the snake has eaten food, increase length
		if (this.body.length > this.length) {
			this.body.pop(); // Remove the last segment
		}
	}
	
	draw(context) {
		// Draw body
		for (let i = 0; i < this.body.length; i++) {
		const segment_size = this.radius * (1 - i / this.body.length);

		context.beginPath();
		context.fillStyle = this.color;
		context.arc(this.body[i].x, this.body[i].y, segment_size, 0, Math.PI * 2);
		context.fill();
		context.closePath();
		}

		// Draw head
		context.beginPath();
		context.fillStyle = this.head_color;
		context.arc(this.head.x, this.head.y, this.radius, 0, Math.PI * 2);
		context.fill();
		context.closePath();
  	}
	
	render(context) {
		this.update();
		this.draw(context);
	}
};
