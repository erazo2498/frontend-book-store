import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  createForm = new FormGroup({
    bookName : new FormControl('',Validators.required),
    bookAuthor : new FormControl('',Validators.required),
    bookPublisher : new FormControl(''),
    bookGenre : new FormControl('')
  })

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
  }

}
