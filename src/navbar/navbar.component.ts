import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 IsScrolled:boolean=false;
 @HostListener('window:scroll',['$event'])onscroll(){
  if(window.scrollY>100){
    this.IsScrolled=true;
  }else{
    this.IsScrolled=false;
  }
 }
}
