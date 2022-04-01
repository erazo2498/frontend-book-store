import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationComponentsService } from 'src/app/core/services/communication-components.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  myForm = new FormGroup({
    searchType : new FormControl('',Validators.required),
    valueLookFor : new FormControl('',Validators.required),

  });
  constructor(private communication: CommunicationComponentsService,private router: Router) { }

  ngOnInit(): void {
  }
  emitirConsulta(){
    this.router.navigate(['list']);
    this.communication.eventEmit.emit(this.myForm.value);
  }
}
