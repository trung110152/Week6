import {Library} from "./Library";

export class News extends Library {
    private _dIssue!: number;


    constructor(nCode: number, imprint: string, nRelease: number, Category: string, dIssue: number) {
        super(nCode, imprint, nRelease, Category);
        this._dIssue = dIssue;
    }

    get dIssue(): number {
        return this._dIssue;
    }

    set dIssue(value: number) {
        this._dIssue = value;
    }
}