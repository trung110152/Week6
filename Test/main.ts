import {QuanLy} from "./QuanLy";
import {Library} from "./Library";
import {Magazine} from "./Magazine";
import {Book} from "./Book";
import {News} from "./News";

let book: Book = new Book(1, 'CodeGym', 1000, "odegym", 20 )
QuanLy.add(book)
QuanLy.editD(2, book,)
QuanLy.deleteD(1)
QuanLy.display()