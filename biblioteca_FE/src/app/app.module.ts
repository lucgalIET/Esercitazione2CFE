import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { LibriComponent } from './components/libri/libri.component';
import { AutoriComponent } from './components/autori/autori.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BibliotecaComponent,
    LibriComponent,
    AutoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
