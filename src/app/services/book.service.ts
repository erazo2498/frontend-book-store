import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  url: String = "http://localhost:80/api/books/";

  constructor(private httpClient: HttpClient) { }

  getAllBooks():Observable<Book[]> {
    let urlGetAllBook = this.url + "all";
    return this.httpClient.get<Book[]>(urlGetAllBook);
  }

  getBookByIsbn(isbn : any):Observable<Book> {
    let urlGetBook = this.url + "book/" + isbn;
    return this.httpClient.get<Book>(urlGetBook);
  }
  getBookByAuthor(author : any):Observable<Book[]> {
    let urlGetBook = this.url + "author/" + author;
    return this.httpClient.get<Book[]>(urlGetBook);
  }
  getBookByPublisher(publisher : any):Observable<Book[]> {
    let urlGetBook = this.url + "publisher/" + publisher;
    return this.httpClient.get<Book[]>(urlGetBook);
  }
  saveBook(formBook: Book):Observable<Book> {
    let urlGetBook = this.url + "new";
    return this.httpClient.post<Book>(urlGetBook,formBook);
  }
  delete(isbn: number):Observable<Boolean> {
    let urlDeleteBook = this.url + "delete/"+isbn;
    return this.httpClient.delete<Boolean>(urlDeleteBook);
  }
}
