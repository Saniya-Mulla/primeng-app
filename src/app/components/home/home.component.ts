import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router : Router){}

  logOut(){
    sessionStorage.clear();
    this.router.navigate(['login']);

  }
}
