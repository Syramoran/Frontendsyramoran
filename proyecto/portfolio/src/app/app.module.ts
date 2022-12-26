import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { IntroductionComponentComponent } from './introduction-component/introduction-component.component';
import { BotonesindiceComponentComponent } from './botonesindice-component/botonesindice-component.component';
import { ArtesectionComponentComponent } from './artesection-component/artesection-component.component';
import { GalleryComponentComponent } from './artesection-component/gallery-component/gallery-component.component';
import { DesarrollowsectionComponentComponent } from './desarrollowsection-component/desarrollowsection-component.component';
import { DisenosectionComponentComponent } from './disenosection-component/disenosection-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './paginas/register/register.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { IngresarComponent } from './paginas/ingresar/ingresar.component';
import { SobremiComponent } from './paginas/sobremi/sobremi.component';
import { TiendaComponent } from './paginas/tienda/tienda.component';
import { HomeComponent } from './home/home.component';
import { FormingresoComponent } from './paginas/ingresar/formingreso/formingreso.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    IntroductionComponentComponent,
    BotonesindiceComponentComponent,
    ArtesectionComponentComponent,
    GalleryComponentComponent,
    DesarrollowsectionComponentComponent,
    DisenosectionComponentComponent,
    FooterComponentComponent,
    RegisterComponent,
    ContactoComponent,
    IngresarComponent,
    SobremiComponent,
    TiendaComponent,
    HomeComponent,
    FormingresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
