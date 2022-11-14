import {Circle} from "./Circle";

 export class Cylinder extends Circle {
    height: number = 1.0;

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this.height = height;
    }

    public getVolume(): number {
        return super.getArea()*this.height;
    }
}