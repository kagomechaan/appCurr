import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descricao-xpcomponent',
  templateUrl: './descricao-xpcomponent.component.html',
  styleUrls: ['./descricao-xpcomponent.component.scss']
})
export class DescricaoXPComponentComponent implements OnInit {
  @Input() empresa?: string;
  constructor() {

  }
  ngOnInit() {

  }
}
