import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
//usando la opcion 2 de rediccionamiento
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes : Heroe[] = [];

  constructor( private _heroesService : HeroesService,
               /*usando la opcion dos*/
               private router : Router ) { //usar servicio de heroesservices  
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);    
  }
  //usando la opcion 2 de redi
  /*verHeroe(idx:number){
    //console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }*/
}
