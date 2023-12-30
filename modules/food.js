import { globals } from "./globals.js";

export default class Food {
    constructor() {
        this.x = Math.random() * globals.GAME_WIDTH;
        this.y = Math.random() * globals.GAME_HEIGHT;
        this.radius = 8;
        this.color = 'red';
    }
    
    randomize_pos() {
        this.x = Math.random() * globals.GAME_WIDTH;
        this.y = Math.random() * globals.GAME_HEIGHT;
    }
    
    render(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
};