import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  _pokeResult: { name: string, url: string };
  _poke: any;

  @Input()
  get poke(): { name: string, url: string } {
    return this._pokeResult;
  };

  set poke(result: { name: string, url: string }) {
    this.pokeService.getPokemonByUrl(result.url)
      .subscribe(
        pokemon => {
          this._poke = pokemon;
        }
      )
  }


  id: string;
  detailPokemon: any;
  constructor(private pokeService: PokemonsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      console.log("Entro a detail")
      console.log(this.id)
      this.pokeService.getPokemonByUrl(this.id).subscribe((data) => {
        this.detailPokemon = data;
        console.log(data)
      });
    })

  }

}
