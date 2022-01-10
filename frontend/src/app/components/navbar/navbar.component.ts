import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/modals/sign-in/sign-in.component';
import { RegisterComponent } from 'src/app/modals/register/register.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openSignIn() {
      this.dialog.open(SignInComponent);
  }
  openRegister() {
    this.dialog.open(RegisterComponent);
  }
}
