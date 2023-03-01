import { Component, OnDestroy, OnInit,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-fale-comigo',
  templateUrl: './fale-comigo.component.html',
  styleUrls: ['./fale-comigo.component.scss']
})
  
export class FaleComigoComponent implements OnInit, OnDestroy {
  constructor(public route: ActivatedRoute) { }
  listener: Subscription = new Subscription();
  pupopIsVisible: boolean = false;
  ngOnInit() {
    this.listener = this.route.params.subscribe((res:any) => {
      if (res.requestValue === 'susses') {
        this.toggle();
      }
    })

 
  }
  ngOnDestroy() {
    this.listener.unsubscribe();
}

  toggle() {
    this.pupopIsVisible = !this.pupopIsVisible;
  }
  
}
