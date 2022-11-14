import {News} from "./News";
import {Magazine} from "./Magazine";
import {Book} from "./Book";
import {Library} from "./Library";

export class QuanLy {
    static list: Library[] = [];

    static add(obj: Library): void {
        QuanLy.list.push(obj);
    }

    static display(): void {
        console.table(this.list)
    }

    static deleteD(nCode: number): void {
        this.list.map((obj, index) => {
            obj.nId === nCode ? this.list.splice(index, 1) : false;
        })
        // let flag = 1
        // this.list.map((obj, index) => {
        //         flag++;
        //         obj.nCode === nCode ? this.list.splice(index, 1) : flag--;
        //     }
        // )
        // flag === 1 ? console.log('can not find') : console.log('deleted %d', nCode)
    }

    static editD(nCode1: number, nCode2: number): void {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].nId === nCode1) {
                for (let j = 0; j < this.list.length; j++) {
                    if (nCode2 == this.list[j].nId) {
                        this.list[i] = this.list[j]
                    }
                }
            }
        }
    }

    static findD(xxx: any): void {
        this.list.filter(obj => obj.nId === xxx).forEach(obj => console.table(obj)); //Tìm theo mã tài liệu
        this.list.filter(obj => obj.Category === xxx).forEach(obj => console.table(obj)) //Tìm theo thể loại

    }
}

