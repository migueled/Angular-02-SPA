import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes : any = {};
  termino : string;

  constructor(private activatedRoute : ActivatedRoute,
              private _heroesServices : HeroesService,
              private router : Router
              ) {
              }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe( params => {
      this.termino = params['buscarpor'];
      this.heroes  = this._heroesServices.buscarHeroes(params['buscarpor']);
      });
  }

  vacioobje() {
    if( Object.entries(this.heroes).length === 0 ){      
      return true;
    } else {
      return false;
    }
  }

  /*verHeroe(idx:number){
    //console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }*/

}
