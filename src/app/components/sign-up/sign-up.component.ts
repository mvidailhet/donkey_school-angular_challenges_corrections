import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface User {
  firstname: string;
  lastname: string;
  mail: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  onSubmit(userForm: NgForm): void {
    const user: User = userForm.value.userData;
    console.log(user);

    userForm.reset({
      userData: {
        firstname: '',
        lastname: '',
        mail: '',
        password: '',
      },
    });
  }
}
