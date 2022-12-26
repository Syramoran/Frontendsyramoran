import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formingreso',
  templateUrl: './formingreso.component.html',
  styleUrls: ['./formingreso.component.css']
})

export class FormingresoComponent {
  constructor(){

  }

  onInit(): void{
  }

  login(form:NgForm){
    const email = form.value.email
    const password = form.value.password
  }
}
