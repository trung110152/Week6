import {User} from "./user";
import {UserManager} from "./userManager";

let user0 = new User('Nguyen Van A', 'nguyenvana@gmail.com', 1);

let user1 = new User('Nguyen Van b', 'nguyenvanb@gmail.com', 2);

let user2 = new User('Nguyen Van c', 'nguyenvanc@gmail.com', 2);

let userManager = new UserManager();

userManager.getAll  (user0);

userManager.getAll  (user1);

userManager.getAll  (user2);


console.log(userManager.getInfo())

console.log(userManager.All(user0))