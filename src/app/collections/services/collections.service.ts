import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from "firebase/app";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  colRef : AngularFireList<any>;
  colwithPokemonsRef : AngularFireList<any>;
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase) {
    authFire.authState.subscribe(
      user => {
        if(user){
          this.user = user;
          this.colRef = rdb.list('collections/'+this.user.uid);
        }
      }
    );
   }

   listCollections():AngularFireList<any[]>{
     return this.colRef;
   }

   removeCollection(key: string){
    this.rdb.list<any[]>('collections/' + this.user.uid + "/" + key).remove()
  }

  getPokemonsFromCollection(key:string): AngularFireList<any[]>{
    this.colwithPokemonsRef = this.rdb.list<any[]>('collections/' + this.user.uid + "/" + key + "/pokemons");
    return this.colwithPokemonsRef;
  }

  /*listFavorites():Observable<any[]>{
    return this.favsRef.valueChanges();
  }
*/

  removePokemonFromCollection(key:string, pokemonId:string){
    console.log('collections/' + this.user.uid + "/" + key + "/pokemons/" + pokemonId)
    this.rdb.list<any[]>('collections/' + this.user.uid + "/" + key + "/pokemons/" + pokemonId).remove();
  }

  addPokemon(key:string, pokemon: any){
    let favsRef1 = this.rdb.list('collections/' + this.user.uid + "/" + key + "/pokemons");
    const promise = favsRef1.push(pokemon);
    console.log("Pokemon Agregado")
    promise.then(
      _ => {
        alert("Pokemon Agregado");
        //this.alertService.message({msg: "Pokemon Agregado", type: 'success'});
      }
    );
    
}
}

