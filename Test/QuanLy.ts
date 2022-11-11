import {News} from "./News";
import {Magazine} from "./Magazine";
import {Book} from "./Book";

import {Library} from "./Library";

export class QuanLy {
    static list: Library[] = [];

    static add(o: Library): void {
        QuanLy.list.push(o);
    }

    static display(): void {
        for (const o of QuanLy.list) {
            console.table(o);
        }
    }

    static deleteD(nCode: number): void {
        for (let i = 0; i < QuanLy.list.length; i++) {
            if (QuanLy.list[i].nCode === nCode) {
                QuanLy.list.splice(i, 1);
            }
        }
    }

    static editD(nCode: number, dEdit: Library): void {
        for (let i = 0; i < QuanLy.list.length; i++) {
            if (QuanLy.list[i].nCode === nCode) {
                QuanLy.list[i] = dEdit;
            }
        }
    }

    static findD(nCode: number ): void {
        this.list.filter(value => value._nCode === nCode).forEach( value => {
            console.log(value)})
    }
}

