import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  delete(isbn: number):Observable<Boolean> {
    let urlDeleteBook = this.url + "delete/"+isbn;
    return this.httpClient.delete<Boolean>(urlDeleteBook);
  }

  url: String = "http://localhost:80/api/books/";

  constructor(private httpClient: HttpClient) { }

  getAllBooks():Observable<Book[]> {
    let urlGetAllBook = this.url + "all";
    return this.httpClient.get<Book[]>(urlGetAllBook);
  }
}
