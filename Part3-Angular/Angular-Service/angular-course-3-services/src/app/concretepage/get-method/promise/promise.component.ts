import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseBooks: Promise<Book[]>
  books: Book[];
  errorMessage: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.promiseBooks = this.bookService.getBooksWithPromise(); //for async pipe
    //without async pipe
    this.promiseBooks.then(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }

}
