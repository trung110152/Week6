import {Library} from "./Library";

export class Book extends Library{
     private _aName!: string;
     private _nPage!: number;

     constructor(nCode: number, imprint: string, nRelease: number, aName: string, nPage: number) {
  super(nCode, imprint, nRelease);
  this._aName = aName;
  this._nPage = nPage;
 }

 get aName(): string {
  return this._aName;
 }

 set aName(value: string) {
  this._aName = value;
 }

 get nPage(): number {
  return this._nPage;
 }

 set nPage(value: number) {
  this._nPage = value;
 }
}