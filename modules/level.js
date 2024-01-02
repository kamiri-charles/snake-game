export default class Level {
    constructor(number) {
        this.image = new Image();
        this.image.src = `../levels/level_${number}/map.png`;
        //this.level_data = `../levels/level_${number}/data.js`;
    }

    render(context) {
        context.drawImage(this.image, 0, 0);
    }
}