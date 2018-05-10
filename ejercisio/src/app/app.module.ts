import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalesComponent } from './animales/animales.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { AulaComponent } from './aula/aula.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalesComponent,
    EmpresaComponent,
    AulaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
