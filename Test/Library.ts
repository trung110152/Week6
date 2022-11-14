export class Library {
     _nCode!: number;
    private _imprint!: string;
    private _nRelease!: number;
     _Category!: string;


    constructor(nCode: number, imprint: string, nRelease: number, Category: string) {
        this._nCode = nCode;
        this._imprint = imprint;
        this._nRelease = nRelease;
        this._Category = Category;
    }

    get nCode(): number {
        return this._nCode;
    }

    set nCode(value: number) {
        this._nCode = value;
    }

    get imprint(): string {
        return this._imprint;
    }

    set imprint(value: string) {
        this._imprint = value;
    }

    get nRelease(): number {
        return this._nRelease;
    }

    set nRelease(value: number) {
        this._nRelease = value;
    }

    get Category(): string {
        return this._Category;
    }

    set Category(value: string) {
        this._Category = value;
    }
}