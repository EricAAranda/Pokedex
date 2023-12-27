import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { PokemonPhotoComponent } from './components/pokemon-photo/pokemon-photo.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonPhotoComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
