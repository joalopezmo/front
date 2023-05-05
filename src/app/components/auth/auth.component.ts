import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  email!: string;
  password!: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
