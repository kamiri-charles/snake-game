import { globals } from "./globals.js";
import Controls from "./controls.js";

export default class Snake {
    constructor() {
        this.x = globals.GAME_WIDTH * 0.5;
        this.y = globals.GAME_HEIGHT * 0.5;
        this.radius = 10;
        this.color = 'black';
        this.controls = new Controls();
        this.speed = globals.SPEED;
        this.velocity = {x: 0, y: 0};

        this.length = 1;
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        // Movement
        if (this.controls.up &&  this.velocity.y == 0) {
            this.velocity.x = 0;
            this.velocity.y = -this.speed;
        }
        if (this.controls.right && this.velocity.x == 0) {
            this.velocity.x = this.speed;
            this.velocity.y = 0;
        }
        if (this.controls.down && this.velocity.y == 0) {
            this.velocity.x = 0;
            this.velocity.y = this.speed;
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
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        // TODO: Draw body
    }

    render(context) {
        this.update();
        this.draw(context);
    }
};