import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/auth.service';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {

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
  }

}
