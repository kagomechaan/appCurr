import { Component, OnDestroy, OnInit, } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'


@Component({
  selector: 'app-popup-fale-comigo',
  templateUrl: './popup-fale-comigo.component.html',
  styleUrls: ['./popup-fale-comigo.component.scss'] 
})
export class PopupFaleComigoComponent implements OnInit, OnDestroy {
  constructor(private matDialogRef: MatDialogRef<PopupFaleComigoComponent>) { }
  ngOnInit() {

  }
  ngOnDestroy() {

  }
  close() {
    this.matDialogRef.close();

  }

}
