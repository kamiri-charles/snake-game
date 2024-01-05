import Block from "./block.js";
import { globals } from "./globals.js";

export default class Level {
    constructor(number) {
        this.image = new Image();
        this.image.src = `../levels/level_${number}/map.png`;
        this.blocks = [];
        //this.level_data = `../levels/level_${number}/data.js`;
    }

    format(data = []) {
        let formatted_data = [];
        if (data.length > 0) {
            let blocks_per_row = globals.GAME_WIDTH / globals.BLOCK_SIZE;
            for (let i = 0; i < data.length; i += blocks_per_row) {
                formatted_data.push(data.slice(i, i + blocks_per_row));
            }
        };

        return formatted_data;
    }

    load(data = []) {
        let formatted_data = this.format(data);

        for (let y = 0; y < formatted_data.length; y++) {
            for (let x = 0; x < formatted_data[y].length; x++) {
                if (formatted_data[y][x] === 1) {
                    this.blocks.push(new Block(x * globals.BLOCK_SIZE, y * globals.BLOCK_SIZE));
                }
            };
        };

        console.log(this.blocks);
    }

    render(context) {
        context.drawImage(this.image, 0, 0);

        //this.blocks.forEach(block => block.render(context));
    }
};