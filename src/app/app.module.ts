import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TextosHeaderComponent } from './components/textos-header/textos-header.component';
import { WaveComponent } from './components/wave/wave.component';
import { MainComponent } from './components/main/main.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlatoFuerteComponent } from './components/plato-fuerte/plato-fuerte.component';
import { PostresComponent } from './components/postres/postres.component';
import { VinosComponent } from './components/vinos/vinos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContenedorFooterComponent } from './components/contenedor-footer/contenedor-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TextosHeaderComponent,
    WaveComponent,
    MainComponent,
    SobreNosotrosComponent,
    MenuComponent,
    PlatoFuerteComponent,
    PostresComponent,
    VinosComponent,
    FooterComponent,
    ContenedorFooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
