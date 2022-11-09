import {User} from "./user";

export class UserManager {

    private product: User[] = [];

    constructor() {
    }

    getInfo() {

        return this.product;

    }

    getAll(product: User) {

        this.product.push(product);

    }

    All(product: User) {
        if (product.getRole() === 1) {

            console.log('ADMIN')

        } else console.log('USER')
    }


}