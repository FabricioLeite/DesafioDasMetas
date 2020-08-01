import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './modules/inicial/inicial.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { MetasComponent } from './shared/metas/metas.component';
import { PontuacaoComponent } from './shared/pontuacao/pontuacao.component';
import { MetasLiberadasComponent } from './shared/metas-liberadas/metas-liberadas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    PerfilComponent,
    MetasComponent,
    PontuacaoComponent,
    MetasLiberadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
