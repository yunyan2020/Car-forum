import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterUserService } from 'src/app/services/register-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email!: string;
  username!: string;
  password!: string;
  confirmPassword!: string;
  errorMessage!: string;
  wasAnError!: boolean;

  constructor(
    private _registerUser: RegisterUserService,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onChange() {
    this.wasAnError = false;
  }

  onRegister() {
    if (
      !this.username ||
      !this.email ||
      !this.password ||
      !this.confirmPassword
    ) {
      return;
    }
    const registerInfo = {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };

    this._registerUser.signUpUser(registerInfo).subscribe(
      (res) => {
        this.wasAnError = false;
        this.dialog.closeAll();
        this._router.navigate(['/']);

        Swal.fire('Success', 'Register successfully', 'success');
      },
      (err) => {
        this.wasAnError = true;
        this.errorMessage = err.error.message;
      }
    );

    this.wasAnError = false;
  }
}
