import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { constructor } from 'q';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { UserAutorizationService } from './user-autorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email: string;
  password: string;

  public loginFormulario: FormGroup;
  public loginControls: FormControl;

  constructor( public authService: AuthService,
              private router: Router,
              private autorization: UserAutorizationService
            ) { }

  ngOnInit() {
    this.loginFormulario = new FormGroup({
      email: new FormControl,
      senha: new FormControl,
      tipoUsuario: new FormControl
    });
  }

  signup(email, password) {
    this.authService.signup(email, password);
    this.email = this.password = '';
  }

  login(email, password) {
    console.log(this.authService.login(email, password));
    this.email = this.password = '';
    if (this.loginFormulario.controls.tipoUsuario.value == 0) this.autorization.setVariavel("tipo-usuario", "professor");
    else this.autorization.setVariavel("tipo-usuario", "aluno");

    this.autorization.setVariavel("usuario", this.loginFormulario.controls.email.value);

    this.router.navigateByUrl('index');

  }

  logout() {
    this.authService.logout();
  }
}
