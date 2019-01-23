import { Component, OnInit } from '@angular/core';
import { books } from "../../../books";
import { PokemonsService } from '../../services/pokemons.service';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { CollectionsService } from '../../../collections/services/collections.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  constructor(private collectionService: CollectionsService,private pokemonsService: PokemonsService, private msgService: MessagesService, private authFire: AngularFireAuth) { }
  books : any[] = [];
  listCollections: Observable<any[]> ;
  page: any;
  limit:any;
 ngOnInit() {
   // this.books = books.items;
   this.getProducts();
   this.buildCollections();
   
    this.page = 0;
    this.limit = 20;
  }

  addFavorites(book) {
    this.pokemonsService.addFavorite(book);
  }

  getProducts(): void {

      this.pokemonsService.getProducts(this.page*this.limit, this.limit).subscribe(products => this.buildPokemons(products) );
      this.msgService.getNamePokemon().subscribe((data:string) =>  this.searchBook(data))
    }

    buildCollections(){
      this.authFire.authState.subscribe(
      user => {
        this.listCollections =  this.collectionService.listCollections().snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          ));
      }
    );
    }

    buildPokemons(pokes){
      let temporalArray: Array<any> = [];


      for (let index = 0; index < pokes.results.length; index++) {
        const element = pokes.results[index];
         
        this.pokemonsService.getPokemon(element.url).subscribe(poke=>{temporalArray.push(poke);});
      }

    this.books = temporalArray;
  }

  getImage(url: string): string {
    let pokemon;

    this.pokemonsService.getPokemon(url).subscribe(poke => { pokemon = poke.sprites.front_default; console.log(poke) });

    console.log(pokemon);
    return pokemon;
  }
  searchBook(data: string) {
    console.log("entro searchbook")
    if (data) {
      return this.pokemonsService.getProduct(data).subscribe(pokeInfo => { this.books =[pokeInfo] });
    }else {
      this.getProducts();
    }
    //this.search(data);
  }



  search(query: string) {
    console.log("entro search(query: string) ")
    let book = this.books.find(
      item => {
        return item.volumeInfo.Title === query;
      }
    );
    this.books = [];
    this.books.push(book);
  }

      displayCounter(data: any, poke: any){
        this.collectionService.addPokemon(data.name, poke);
      }

      Next(){
        this.page = this.page + 1;
        this.getProducts();
      }

      Previous(){
        this.page = this.page - 1;
        if(this.page <= 0)
          this.page = 0;
        this.getProducts();
      }

      GoPage(numPage:any){
        this.page = numPage;
        this.getProducts();
      }

      isPageZero():boolean{
        return this.page <=0;
      }

      //sorting
      key: string = 'order'; //set default
      reverse: boolean = false;
      sort(key){
        this.key = key;
        this.reverse = !this.reverse;
      }
}
