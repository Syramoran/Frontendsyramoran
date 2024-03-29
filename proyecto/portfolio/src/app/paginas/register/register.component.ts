import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formReg: FormGroup;

  constructor(
    private userService: UserService
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void{

  }

  onSubmit() {
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error))
  }

}
