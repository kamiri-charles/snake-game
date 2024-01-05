import { globals } from "../globals.js";
import { detect_rect_circ_collision } from "../utils.js";

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

    update(snake, blocks) {
        blocks.forEach(block => {
            if (detect_rect_circ_collision(block, this)) {
                this.randomize_pos();
            }
        });
    }

    
    render({context, snake, blocks = []}) {

        this.update(snake, blocks)

        this.frame += this.frame_offset;

        if (this.frame >= 17 * this.frame_offset) {
            this.frame = 0;
        };
        
        // Draw food image
        context.drawImage(
            this.image,
            this.frame, 0,
            this.size, this.size,
            this.x - this.radius - 6, this.y - this.radius - 5,
            this.size, this.size
        );
    }
};