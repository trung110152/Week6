import {Animal} from "./Animal";
import {Edible} from "../InterfaceEdible/Edible";

export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }

    howToEat(): string {
        return "Could be fried";
    }
}