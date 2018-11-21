import { from, Observable } from 'rxjs';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';
import { Usuario } from './../Usuario';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioCollectionRef: AngularFirestoreCollection<Usuario>;
  usuarios$: Observable<Usuario[]>;

  constructor(private db: AngularFirestore, private router: Router) {
    this.usuarioCollectionRef = db.collection<Usuario>('usuarios');
    this.usuarios = this.usuarioCollectionRef.valueChanges();
  }

  private contasUsuarios: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;

  formularioCadastro = new FormGroup ({
    primeiroNome: new FormControl('', Validators.required),
    ultimoNome: new FormControl('', Validators.required),
    cargo: new FormControl('', Validators.required),
    nomeEscola: new FormControl('', Validators.required),
    dtNascimento: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  addUsuario(primeiroNome: string): void {
    console.log('entrou');
    const id = this.db.createId();
    /*const usuario: Usuario = {
      primeiroNome: 'Jessica',
      ultimoNome: 'Severino',
      cargo: 'Professora',
      nomeEscola: 'IFSP Catanduva',
      dtNascimento: '27/04/1993',
      email: 'jessica.severino@aluno.ifsp.edu.br',
      senha: 'admin123',
      confirmaSenha: 'admin123'
    };*/
    console.log('saiu');
    // this.usuarioCollectionRef.doc(id).set(usuario);
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
    this.usuarios = this.db.collection<Usuario>('usuarios').valueChanges();
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
