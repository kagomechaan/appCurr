import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';

// --------------------------- COMPONENTES ---------------------------------------------------

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './corpo/menu/menu.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RedesSociaisComponent } from './corpo/redes-sociais/redes-sociais.component';
import { CertificadosComponent } from './corpo/certificados/certificados.component';
import { ProjetosComponent } from './corpo/projetos/projetos.component';
import { XpComponent } from './corpo/xp/xp.component';
import { FaleComigoComponent } from './corpo/fale-comigo/fale-comigo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CorpoComponent,
    RedesSociaisComponent,
    CertificadosComponent,
    ProjetosComponent,
    XpComponent,
    FaleComigoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES),  // mapeamento global , o forchild é um mapeamento interno
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
