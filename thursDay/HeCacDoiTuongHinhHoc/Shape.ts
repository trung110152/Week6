export class Shape {
    private color: string = "red";
    private  filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.filled = filled;
        this.color = color;
    }

    public getColor(): string {
        return this.color
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getFilled(): boolean {
        return this.filled
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public toString(): string {
        return "A Shape with color of "
        + this.getColor()
        + " and "
        + (this.getFilled() ? "filled" : "not filled");
    }
}