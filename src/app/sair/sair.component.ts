import { AuthService } from '../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
