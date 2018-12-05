import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { constructor } from 'q';
import { auth } from 'firebase/app';
import { UserAutorizationService } from './login/user-autorization.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public usuario: number = 0;
  public login: boolean;

  constructor(
    public authService: AuthService, private autorization: UserAutorizationService
  ) { }

  ngOnInit() {
    this.login = this.getUser();
  }

  // signup(email, password) {
  //   this.authService.signup(email, password);
  // }

  // login(email, password) {
  //   this.authService.login(email, password);
  //   this.email = this.password = '';
  // }

  // logout() {
  //   this.authService.logout();
  // }

  public getUser() {
    // this.usuario = usuario;
    if (isNullOrUndefined(this.autorization.getVariavel("tipo-usuario"))) return true;
    return false;
  }
}
