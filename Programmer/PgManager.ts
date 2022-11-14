import {ProGrammer} from "./Programmer";

export class Manager extends ProGrammer{

    static list: ProGrammer[] = []

    static add(obj: ProGrammer): void {
        this.list.push(obj)
    }

    static maxSalary(): ProGrammer {
        const a = this.list.slice().sort((p1, p2) => p2.Salary - p1.Salary);
        return a[0]
    }
}




