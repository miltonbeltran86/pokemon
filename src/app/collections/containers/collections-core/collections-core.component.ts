import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';
import { CollectionsService } from '../../services/collections.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-collections-core',
  templateUrl: './collections-core.component.html',
  styleUrls: ['./collections-core.component.css']
})
export class CollectionsCoreComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService,private collectionsServices: CollectionsService, private authFire: AngularFireAuth) { }

  collectionPoke: Observable<any[]>;
  addCollection(col){
    this.pokemonsService.addCollection(col);
  }

  removeCollection(col){
    this.collectionsServices.removeCollection(col);
  }

  

  ngOnInit() {

    this.authFire.authState
    .subscribe(
      user => {          
        this.collectionPoke =  this.collectionsServices.listCollections().snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          ));          
      }
    );   
  }

  displayCounter(data: any){
    this.pokemonsService.addCollection(data);

  }
}
