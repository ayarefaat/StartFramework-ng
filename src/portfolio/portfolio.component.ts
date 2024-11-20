import { Component } from '@angular/core';
import { log } from 'console';

interface IImages{
  imgSrc:string;
  imgAlt:string
};

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
image:any;
IsVisible:boolean=false;
imgs:IImages[]=[
  {imgSrc:"./assets/imgs/poert1.png",imgAlt:"Brown House"},
  {imgSrc:"./assets/imgs/port2.png",imgAlt:"Cake with cherry"},
  {imgSrc:"./assets/imgs/port3.png",imgAlt:"Circus"},
];
display(ev:any,data:any){
  console.log(data)
 this.image=ev.srcElement.attributes.src.value;
 this.IsVisible=true;
}
dismiss(ev:any){
  // ev.stopPropagation()
  this.IsVisible=false;
}
}
