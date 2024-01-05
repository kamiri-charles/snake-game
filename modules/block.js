import { globals } from "../globals.js";

export default class Block {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = globals.BLOCK_SIZE;
        this.height = globals.BLOCK_SIZE
    }

    render(context) {
        context.beginPath();
        context.fillStyle = 'rgba(255, 0, 0, 0.5)';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
};