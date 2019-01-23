import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Params } from '@angular/router';
import { listenOnPlayer } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-poke-similars',
  templateUrl: './poke-similars.component.html',
  styleUrls: ['./poke-similars.component.css']
})
export class PokeSimilarsComponent implements OnInit {
  id: string;
  pokemonSimilar: any[] = [];

  constructor(private pokeService: PokemonsService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      console.log("Entro a detail")
      console.log(this.id)
      this.pokeService.getProductForAbilty(this.id).subscribe(data => {
        this.pokeService.getCollections(data.abilities[0].ability.url).subscribe(list => {
          console.log("list")
          console.log(list)
          list.pokemon.forEach(pok => {
            console.log("pok")
            console.log(pok)
            this.pokeService.getPokemon(pok.pokemon.url).subscribe(poke => {
              console.log("poke")
              console.log(poke)
              if (poke.id != this.id)
                this.pokemonSimilar.push(poke)
            })
          });
        })
        console.log("----this.pokemonAbility----")
        console.log(this.pokemonSimilar)

      });
    })
  }


}
