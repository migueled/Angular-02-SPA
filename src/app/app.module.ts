import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routes
import { APP_ROUTING } from './app.routes';
//services
import { HeroesService } from './services/heroes.service';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        AboutComponent,
        HeroesComponent,
        HeroeComponent,
        SearchComponent,
        CardsComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [
        //servicios
        HeroesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
