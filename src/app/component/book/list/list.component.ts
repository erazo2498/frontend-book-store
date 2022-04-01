import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { CommunicationComponentsService } from 'src/app/services/communication-components.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService:BookService, private router: Router, 
    private communication:CommunicationComponentsService) { 
      this.communication.eventEmit.subscribe(
      (myForm:any) => {
        console.log(myForm);
        if(myForm.searchType == 1){
          this.bookService.getBookByAuthor(myForm.valueLookFor).subscribe(books => {
            this.books = books;
          });
        }else{
          this.bookService.getBookByPublisher(myForm.valueLookFor).subscribe(books => {
            this.books = books;
          });
        }
      })
    }

  ngOnInit(): void {
    
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }
  editarBook(id:any) {
    this.router.navigate(['edit',id]);
  }

}
