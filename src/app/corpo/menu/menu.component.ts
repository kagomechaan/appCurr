import { Component } from '@angular/core';
import { faPersonChalkboard, faUserGraduate, faGlasses, faHouse, faMugHot } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faPersonChalkboard = faPersonChalkboard;
  faMugHot = faMugHot;
  faUserGraduate = faUserGraduate;
  faGlasses = faGlasses;
  faHouse = faHouse;
  list = document.querySelectorAll('.list');


  
 
 



}


