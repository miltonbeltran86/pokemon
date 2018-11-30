import { Component, OnInit } from '@angular/core';
import { books } from "../../../books";
import { PokemonsService } from '../../services/pokemons.service';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService) { }
  books : any[] = [];
 ngOnInit() {
   // this.books = books.items;
   this.getProducts();
  }

  getProducts(): void {  
      this.pokemonsService.getProducts().subscribe(products => this.books = products);  }

}
