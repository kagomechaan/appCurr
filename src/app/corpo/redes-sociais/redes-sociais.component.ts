import { Component } from '@angular/core';
import { faInstagram,faLinkedin,faWhatsapp,faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.scss']
})
export class RedesSociaisComponent {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
}
