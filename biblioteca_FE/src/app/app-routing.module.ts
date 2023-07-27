import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { LibriComponent } from './components/libri/libri.component';
import { AutoriComponent } from './components/autori/autori.component';

const routes: Routes = [
  {path: '', component:BibliotecaComponent},
  {path: '/libri', component:LibriComponent},
  {path: '/autori', component:AutoriComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
