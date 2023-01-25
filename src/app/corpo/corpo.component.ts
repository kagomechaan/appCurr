import { Component, OnInit } from '@angular/core';
import { CertificadosComponent } from './certificados/certificados.component';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.scss']
})
export class CorpoComponent implements OnInit{
  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.containerCorpo') as any);
  }
}
