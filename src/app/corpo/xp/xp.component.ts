import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.scss']

})
export class XpComponent {
  stepPosition: number = 1;

  @Input() empresa: string = 'sesi';

  teste(step:string) {
    this.empresa = step
    if (this.empresa === 'sesi') {

      this.stepPosition = 1;
    }
    if (this.empresa === 'gazeta') {
 
      this.stepPosition = 20;
    }
    if (this.empresa === 'tim') {

      this.stepPosition = 40;
    }
    if (this.empresa === 'saraiva') {

      this.stepPosition = 60;
    }
    if (this.empresa === 'prefeitura') {

      this.stepPosition = 80;
    }
    if (this.empresa === 'atual') {

      this.stepPosition = 100;
    }
  }
}
