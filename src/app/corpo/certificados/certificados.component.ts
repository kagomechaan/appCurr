import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {  Pagination, EffectCoverflow } from 'swiper';
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);





@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CertificadosComponent {

}
