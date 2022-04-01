import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  selectedBook: Book = new Book;
  editForm = new FormGroup({
    bookName : new FormControl('',Validators.required),
    bookAuthor : new FormControl('',Validators.required),
    bookPublisher : new FormControl(''),
    bookGenre : new FormControl('')
  });

  constructor(private activedRouter: ActivatedRoute, private router:Router, private bookService:BookService) { }
  
  ngOnInit(): void {
    let isbn = this.activedRouter.snapshot.paramMap.get('isbn');
    this.bookService.getBookByIsbn(isbn).subscribe(book => {
      this.selectedBook = book;
      this.editForm.setValue({
        'bookName': this.selectedBook.name,
        'bookAuthor': this.selectedBook.author,
        'bookPublisher': this.selectedBook.publisher,
        'bookGenre': this.selectedBook.genre
      });
    });
  }
  

  deleteBook() {
    this.bookService.delete(this.selectedBook.isbn).subscribe(response => {
      if(response == true){
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado el libro correctamente!',
          'success'
        );
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
      this.router.navigate(['list']);
    })
  }

  updateBook(formBook:Book){
    console.log(formBook)
    Swal.fire(
      'Ten en cuenta',
      'Habrá futuras implementaciones!',
      'info'
    )
  }
}
