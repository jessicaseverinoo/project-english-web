import { PerfilComponent } from './app/perfil/perfil.component';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Success!', value);
    })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      this.router.navigateByUrl('index');
    })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}
