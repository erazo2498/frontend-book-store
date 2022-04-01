import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/core/model/book';
import { BookService } from 'src/app/core/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  createForm = new FormGroup({
    name : new FormControl('',Validators.required),
    author : new FormControl('',Validators.required),
    publisher : new FormControl(''),
    genre : new FormControl('')
  });

  constructor(private router:Router, private bookService:BookService) {}

  ngOnInit(): void {
  }

  newBook(formBook:Book){
    console.log(formBook);
    this.bookService.saveBook(formBook).subscribe(response => {
      if(response.name == formBook.name){
        Swal.fire(
          'Libro agregado!',
          'Se ha agregado el libro con exito!',
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
    });
  }

}
