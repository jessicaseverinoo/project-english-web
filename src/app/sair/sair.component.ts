import { from } from 'rxjs';
import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css'],
  animations: [
    trigger('modalSair', [
      state('fechado', style({
        display: 'none'
      })),
      state('aberto', style({
        display: 'block'
      })),
      transition('fechado <=> aberto',
        animate('1s easy-in'))
    ])
  ]
})
export class SairComponent implements OnInit {

  email: string;
  password: string;
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit() {

  }

}
