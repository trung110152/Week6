import {Library} from "./Library";

export class Magazine extends Library{
    private _nIssue!: number;
    private _mIssue!: number;


    constructor(nCode: number, imprint: string, nRelease: number, Category: string, nIssue: number, mIssue: number) {
        super(nCode, imprint, nRelease, Category);
        this._nIssue = nIssue;
        this._mIssue = mIssue;
    }

    get nIssue(): number {
        return this._nIssue;
    }

    set nIssue(value: number) {
        this._nIssue = value;
    }

    get mIssue(): number {
        return this._mIssue;
    }

    set mIssue(value: number) {
        this._mIssue = value;
    }
}
