import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { constructor } from 'q';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  email: string;
  password: string;

  // ngOnInit(): void {
  //  throw new Error('Method not implemented.');
  // }

  // constructor(public afAuth: AngularFireAuth) { }
  // login() {
  //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }
  // logout() {
  //   this.afAuth.auth.signOut();
  // }

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
