import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-poke-similars',
  templateUrl: './poke-similars.component.html',
  styleUrls: ['./poke-similars.component.css']
})
export class PokeSimilarsComponent implements OnInit {
  id: string;
  pokemonAbility: any;

  constructor(private pokeService: PokemonsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      console.log("Entro a similar")
      console.log(this.id)
      this.pokeService.getProductForAbilty(this.id).subscribe(data => {
        this.pokeService.getCollections(data.abilities[0].ability.url).subscribe(list => {
          this.pokemonAbility = list.pokemon
        })
        console.log(" this.pokemonAbility")
        console.log(this.pokemonAbility)
      });
    })    
  }

}
