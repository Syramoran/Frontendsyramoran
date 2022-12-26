import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for default environment
  }

  ngOnInit(): void{
    firebase.initializeApp({
    apiKey: "AIzaSyCiCjcW0vUfmt7PQtF4MrSaVEiGO_LqP4U",
    authDomain: "proyecto-final-5f1cf.firebaseapp.com",
    });
  }
  title = 'portfolio';
}
