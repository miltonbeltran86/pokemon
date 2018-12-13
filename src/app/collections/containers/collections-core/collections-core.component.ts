import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';
import { CollectionsService } from '../../services/collections.service';

@Component({
  selector: 'app-collections-core',
  templateUrl: './collections-core.component.html',
  styleUrls: ['./collections-core.component.css']
})
export class CollectionsCoreComponent implements OnInit {

  constructor(private pokemonsService: PokemonsService,private collectionsServices: CollectionsService) { }

  collectionPoke: any[];
  addCollection(col){
    this.pokemonsService.addCollection(col);
  }

  ngOnInit() {
    this.collectionsServices.listCollections().subscribe(list =>{
      this.collectionPoke = list;
    })
  }
}
