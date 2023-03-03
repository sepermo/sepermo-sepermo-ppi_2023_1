import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ecommerce/home/home.component';
import { ContactComponent } from './ecommerce/home/contact/contact.component';
import { GorrosComponent } from './ecommerce/home/gorros/gorros.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'gorros', component: GorrosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
