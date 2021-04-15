import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../model/book';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  observableBooks: Observable<Book[]>
  books: Book[];
  errorMessage: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.observableBooks = this.bookService.getBooksWithObservable(); //using async pipe
    //without async
    this.observableBooks.subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error
    );
  }

}
