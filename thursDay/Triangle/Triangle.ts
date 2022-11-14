import {Shape} from "./Shape";

export class Triangle extends Shape {
    private side1: number =1.0;
    private side2: number =1.0;
    private side3: number =1.0

    constructor(name: string, color: string, side1: number, side2: number, side3: number ) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3
    }

    getSide1(): number{
        return this.side1;
    }

    setSide1(side1: number): void {
        this.side1 = side1
    }

    getSide2(): number{
        return this.side2;
    }

    setSide2(side2: number): void {
        this.side2 = side2
    }

    getSide3(): number{
        return this.side3;
    }

    setSide3(side3: number): void {
        this.side3 = side3
    }

    getPerimeter(): number{
        return this.side1 + this.side2 + this.side3
    }

    getArea(): number {
        let p = 0.5* this.getPerimeter();
        return Math.pow(p*(p - this.side1)*(p - this.side2)*(p - this.side3),0.5)
    }

}