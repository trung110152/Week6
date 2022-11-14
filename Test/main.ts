import {QuanLy} from "./QuanLy";
import {Library} from "./Library";
import {Magazine} from "./Magazine";
import {Book} from "./Book";
import {News} from "./News";

let book0: Book = new Book(1, 'CodeGym', 1000,'Book', "codegym", 20 );
let book1: Book = new Book(2, 'CodeGym', 1000,'Book', "codegym", 20 );
let book2: Book = new Book(3, 'CodeGym', 1000,'Book', "codegym", 20 );
let magazine: Magazine = new Magazine(4, 'CoedGym', 100,'Magazine', 10, 10)
let news: News = new News(5,'CodeGym', 100,'News', 1)
QuanLy.add(book0)
QuanLy.add(book1)
QuanLy.add(book2)
QuanLy.add(news)
QuanLy.add(magazine)
QuanLy.display()
QuanLy.editD(2, 5)
console.log('-----sau khi thay------')
QuanLy.display()
console.log('xxxxx')
QuanLy.findD(1)
console.log('xxxxx')
QuanLy.findD('Book')
QuanLy.deleteD(3)

console.log("------sau khi xoa------")
QuanLy.display()
QuanLy.deleteD(6)

