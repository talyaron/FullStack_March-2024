export class Size {
    size: number;
    constructor() {
        this.size = this.getSize();
    }

    getSize() {
        const widthScreen = window.innerWidth;
        const heightScreen = window.innerHeight;
        if (widthScreen < heightScreen) {
            return heightScreen / 5;
        }
        return widthScreen / 5;
    }

}

export const size = new Size();