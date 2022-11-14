export class ProGrammer {
    private _Id!: string;
    private _Salary!: number;

    constructor(Id: string, Salary: number) {
        this._Id = Id;
        this._Salary = Salary;
    }

    get Id(): string {
        return this._Id;
    }

    set Id(value: string) {
        this._Id = value;
    }

    get Salary(): number {
        return this._Salary;
    }

    set Salary(value: number) {
        this._Salary = value;
    }


}

 let list:ProGrammer[] = []
function add(obj: ProGrammer): void{
    list.push(obj)
}

function maxSalary(): ProGrammer{
  const a =  list.slice().sort((p1,p2) => p2.Salary-p1.Salary);
  return a[0]
1
}

let jsProgrammer: ProGrammer = new ProGrammer('js', 15)
let javaProgrammer: ProGrammer = new ProGrammer('Java', 20)
let phpProgrammer: ProGrammer = new ProGrammer('PHP', 12)
add(jsProgrammer);
add(javaProgrammer);
add(phpProgrammer);
console.log(maxSalary())