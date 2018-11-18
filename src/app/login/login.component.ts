import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { constructor } from 'q';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LoginComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  signup(email, password) {
    this.authService.signup(email, password);
    this.email = this.password = '';
  }

  login(email, password) {
    this.authService.login(email, password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }
}
