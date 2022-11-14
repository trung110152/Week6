export class Circle {
    private color: string = "";
    private radius: number = 1.0;

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return this.radius*this.radius*Math.PI;
    }
}