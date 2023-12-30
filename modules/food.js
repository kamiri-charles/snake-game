import { globals } from "./globals.js";

const food_types = [
    'Apple',
    'Bananas',
    'Cherries',
    'Kiwi',
    'Melon',
    'Orange',
    'Pineapple',
    'Strawberry'
]

export default class Food {
    constructor() {
        this.x = Math.random() * globals.GAME_WIDTH;
        this.y = Math.random() * globals.GAME_HEIGHT;
        this.size = 32;
        this.radius = 10;
        this.color = 'red';
        this.type = food_types[Math.floor(Math.random() * food_types.length)];
        this.image = new Image();
        this.image.src = `../assets/${this.type}.png`;
        this.frame = 0;
        this.frame_offset = 32;
    }
    
    randomize_pos() {
        this.x = Math.random() * globals.GAME_WIDTH;
        this.y = Math.random() * globals.GAME_HEIGHT;
        this.type = food_types[Math.floor(Math.random() * food_types.length)];
        this.image.src = `../assets/${this.type}.png`;
    }
    
    render(context) {

        this.frame += this.frame_offset;

        if (this.frame >= 17 * this.frame_offset) {
            this.frame = 0;
        };
        
        context.drawImage(
            this.image,
            this.frame, 0,
            this.size, this.size,
            this.x - this.radius - 6, this.y - this.radius - 5,
            this.size, this.size
            );
            
            /* context.beginPath();
            context.strokeStyle = 'black';
            context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            context.stroke(); */

    }
};