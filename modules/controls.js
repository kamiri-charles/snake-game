export default class Controls {
    constructor() {
        this.up = false;
        this.right = false;
        this.down = false;
        this.left = false;

        this.init_event_listeners();
    }

    init_event_listeners() {
        // Keydown
        document.addEventListener('keydown', evt => {
            switch(evt.key) {
                case 'ArrowUp':
                    this.up = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowDown':
                    this.down = true;
                    break;
                case 'ArrowLeft':
                    this.left = true;
                    break;
            }
        });

        // Keyup
        document.addEventListener('keyup', evt => {
            switch(evt.key) {
                case 'ArrowUp':
                    this.up = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowDown':
                    this.down = false;
                    break;
                case 'ArrowLeft':
                    this.left = false;
                    break;
            }
        });
    }
};