import {ProGrammer} from "./Programmer";
import {Manager} from "./PgManager";

let jsProgrammer: ProGrammer = new ProGrammer('js', 15)
let javaProgrammer: ProGrammer = new ProGrammer('Java', 20)
let phpProgrammer: ProGrammer = new ProGrammer('PHP', 12)
Manager.add(jsProgrammer);
Manager.add(javaProgrammer);
Manager.add(phpProgrammer);
console.log(Manager.maxSalary())