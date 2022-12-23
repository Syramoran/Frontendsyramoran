import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../paginas/contacto/contacto.component';
import { HomeComponent } from '../home/home.component';
import { IngresarComponent } from '../paginas/ingresar/ingresar.component';
import { RegisterComponent } from '../paginas/register/register.component';
import { SobremiComponent } from '../paginas/sobremi/sobremi.component';
import { TiendaComponent } from '../paginas/tienda/tienda.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'sobremi', component:SobremiComponent},
  {path: 'tienda', component:TiendaComponent},
  {path: 'ingresar', component:IngresarComponent},
  {path: 'register', component:RegisterComponent},
  {path: '**', component:HomeComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
