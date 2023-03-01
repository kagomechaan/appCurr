import {  Routes } from '@angular/router';

import { CorpoComponent } from './corpo/corpo.component';
import { CertificadosComponent } from './corpo/certificados/certificados.component';
import { ProjetosComponent } from './corpo/projetos/projetos.component';
import { XpComponent } from './corpo/xp/xp.component';
import { FaleComigoComponent } from './corpo/fale-comigo/fale-comigo.component';

export const ROUTES: Routes = [
  { path: 'home', component: CorpoComponent },
  { path: '', component: CorpoComponent },
  { path: ' ', component: CorpoComponent },
  { path: 'certificados', component: CertificadosComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'experiencia', component: XpComponent },
  { path: 'falecomigo', component: FaleComigoComponent },
  { path: 'falecomigo/:requestValue', component: FaleComigoComponent }

  ]
