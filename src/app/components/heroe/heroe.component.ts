import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})

export class HeroeComponent {

  heroe:any={}//variable local para usarlo en el template

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices:HeroesService
    ) {
    this.activatedRoute.params.subscribe(params=> {
      /*console.log( params['id']);*/
    this.heroe=this._heroesServices.getHeroe(params['id']);
    console.log(this.heroe);
    });
  }

}
