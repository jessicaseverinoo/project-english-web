import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/auth.service';
import { UserAutorizationService } from '../login/user-autorization.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService, private autorization: UserAutorizationService, private router: Router) { }

  @Input('usuario') set usuarioTipo(value) { this.onChangeUsuario(value); };
  public usuario: string = null;

  public permissao: boolean = false;

  ngOnInit() {
    this.permissao = (this.autorization.getVariavel("tipo-usuario") == "professor" ? true : false);
  }

  public onChangeUsuario(value) {
    this.usuario = value;
  }

  public onClickToggle() {
    // open or close navbar
    $('#sidebar').toggleClass('active');
    // close dropdowns
    $('.collapse.in').toggleClass('in');
    // and also adjust aria-expanded attributes we use for the open/closed arrows
    // in our CSS
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  logout() {
    this.authService.logout();
    this.autorization.setVariavel("tipo-usuario", null);
    this.autorization.setVariavel("usuario", null);
    
    this.router.navigateByUrl('login');
  }
}