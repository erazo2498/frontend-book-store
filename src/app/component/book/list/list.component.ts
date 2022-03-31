import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book = new Book();
  constructor(private bookService:BookService, private router: Router) { }

  ngOnInit(): void {
    
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    })
  }
  showPopup(book: Book) {
    this.selectedBook = book;
  }
  delete(selectedBook: Book) {
    this.bookService.delete(selectedBook.isbn).subscribe(response => {
      if(response == true){
        
      }else{
        
      }

    })
  }
  /*
  update() {
    this.userService.update(this.selectedUser as Student)
      .subscribe(() => {
        this.router.navigate([RUTA_LISTAR_USUARIO]);
        swal({ icon: 'success', title: ACTUALIZACION_EXITOSA_USUARIO });
      }, () => {
        swal({ icon: 'error', title: ACTUALIZACION_ERRONEA_USUARIO });
      });
  }

  usuarioValido(user: User): boolean {
    return (user.nombre === '' || user.apellido === '' || user.telefono === null || user.correo === '');
  }*/
}
