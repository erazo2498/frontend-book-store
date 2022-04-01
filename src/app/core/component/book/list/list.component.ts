import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/core/model/book';
import { BookService } from 'src/app/core/services/book.service';
import { CommunicationComponentsService } from 'src/app/core/services/communication-components.service';
import Swal from 'sweetalert2';

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
          this.bookService.getBookByAuthor(myForm.valueLookFor).subscribe(
            books => this.books = books,
            () => Swal.fire('Busqueda',
            'no hay libros con esa caracteristica',
            'error')
          );
        }else{
          this.bookService.getBookByPublisher(myForm.valueLookFor).subscribe(
            books => this.books = books,
            () => Swal.fire('Busqueda',
            'no hay libros con esa caracteristica',
            'error')
          );
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
