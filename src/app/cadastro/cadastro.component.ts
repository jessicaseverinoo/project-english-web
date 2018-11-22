import { from, Observable } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { Usuario } from './../Usuario';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { IUsuario } from './../models/iusuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  primeiroNome: string;
  ultimoNome: string;
  // cargo: ECargo;
  cargo: string;
  nomeEscola: string;
  dtNascimento: string;
  email: string;
  senha: string;
  confirmaSenha: string;

  private contasUsuarios: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  usuarioCollectionRef: AngularFirestoreCollection<Usuario>;
  usuarios$: Observable<Usuario[]>;

  constructor(private db: AngularFirestore, private router: Router) {
    this.contasUsuarios = db.collection<IUsuario>('users');
    this.usuarioCollectionRef = this.db.collection<IUsuario>('users');
    this.usuarios = this.usuarioCollectionRef.valueChanges();

    /*this.db.doc<IUsuario>('/users/jessica@gmail.com').get().subscribe(res => {

    });*/
  }

  formularioCadastro = new FormGroup({
    primeiroNome: new FormControl('', Validators.required),
    ultimoNome: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    nomeEscola: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  /*criarUsuario (usuario: IUsuario) {
    this.db.doc<IUsuario>(`users/${usuario.email}`).get().subscribe(res => {
      if (res.exists) {
        alert('O usuário já é registrado, por favor autentique-se');
      } else {
        console.log('carregando...');
        this.db.doc<IUsuario>(`users/${usuario.email}`)
            .set(usuario)
            .then(() => {
              console.log('sucesso >>>', res);
            })
            .catch((err) => {
              console.log('erro >>> ', err);
            })
            .finally(() => {
              console.log('carregou');
            });
      }
    });
  }*/

  criarUsuario(usuario: IUsuario) {
    this.db.collection('users').doc(this.email).set({
    'primeiroNome': this.primeiroNome,
    'ultimoNome': this.ultimoNome,
    'dtNascimento': this.dtNascimento,
    'cargo': this.cargo,
    'nomeEscola': this.nomeEscola,
    'email': this.email,
    'senha': this.senha,
    'confirmaSenha': this.confirmaSenha});
  }

  editaUsuario (usuario: IUsuario) {
    this.db.doc<IUsuario>(`/users/${usuario.email}`).get().subscribe(res => {
      if (!res.exists) {
        alert('O usuário não existe! Verifique.');
      } else {
        console.log('carregando...');
        this.db.doc<IUsuario>(`/users/${usuario.email}`)
            .set(usuario)
            .then(() => {
              console.log('sucesso >>>', res);
            })
            .catch((err) => {
              console.log('erro >>> ', err);
            })
            .finally(() => {
              console.log('carregou');
            });
      }
    });
  }

  deletaUsuario (usuario: IUsuario) {
    this.db.doc<IUsuario>(`/users/${usuario.email}`).get().subscribe(res => {
      if (!res.exists) {
        alert('O usuário não existe! Verifique.');
      } else {
        console.log('carregando...');
        this.db.doc<IUsuario>(`/users/${usuario.email}`)
            .delete()
            .then(() => {
              console.log('sucesso >>>', res);
            })
            .catch((err) => {
              console.log('erro >>> ', err);
            })
            .finally(() => {
              console.log('carregou');
            });
      }
    });
  }

  consultaDocs() {
  }

  /*onSubmit() {
    this.criarUsuario(this.formularioCadastro.value);
  }*/

  addUsuario(value: string): void {
    // ...
  }

  deleteUsuario(usuario: any): void {
    // ...
  }

  toggleUsuario(usuario: any): void {
    // ...
  }

  updateUsuario(usuario: any, newValue: string): void {
    // ...
  }

  ngOnInit(): void {
    // this.usuarios = this.db.collection<Usuario>('usuarios').valueChanges();
    this.usuarioCollectionRef = this.db.collection('users');
    this.usuarios = this.usuarioCollectionRef.valueChanges();
  }

  updateProfile() {
    this.formularioCadastro.patchValue({
      primeiroNome: 'Jessica',
      ultimoNome: 'Severino',
      cargo: 'Professora',
      escola: 'IFSP Catanduva',
      dtNascimento: '27/04/1993',
      email: 'jessica.severino@aluno.ifsp.edu.br',
      senha: 'admin123',
      confirmaSenha: 'admin123'
    });
  }

  login() {
    this.router.navigateByUrl('login');
  }

}
