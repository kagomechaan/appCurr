import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'appCurr';
  faMoon = faMoon;
  faSun = faSun;

  OnInit(): void {

  }
  public toggle() {
    document.body.classList.toggle('darkTheme')
  }
}


