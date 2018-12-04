import { Component, OnInit } from '@angular/core';
import { books } from "../../../books";
import { PokemonsService } from '../../services/pokemons.service';
import { MessagesService } from 'src/app/alerts/services/messages.service';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService, private msgService: MessagesService) { }
  books : any[] = [];
 ngOnInit() {
   // this.books = books.items;
   this.getProducts();
  }

  getProducts(): void {  
      this.pokemonsService.getProducts().subscribe(products => this.books = products);  
      this.msgService.getNamePokemon().subscribe((data:string) =>  this.searchBook(data))
    }

       searchBook(data:string){
        console.log("entro searchbook")

        return this.pokemonsService.getProduct(data).subscribe(products => this.books = products);  
        //this.search(data);
      }

      search(query: string){
        console.log("entro")
        let book = this.books.find(
          item => {
            return item.volumeInfo.Title === query;
          }
        );
        this.books = [];
        this.books.push(book);
      }

}
