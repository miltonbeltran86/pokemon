import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectionsService } from 'src/app/collections/services/collections.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-collection',
  templateUrl: './detail-collection.component.html',
  styleUrls: ['./detail-collection.component.css']
})
export class DetailCollectionComponent implements OnInit {

  id : string;
  books:  Observable<any[]>;
  constructor(private route: ActivatedRoute, private collectionService: CollectionsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=> { this.id = params.id
    console.log("Entro a detail")
    console.log(this.id)

    this.books =  this.collectionService.getPokemonsFromCollection(this.id).snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ));
    })

    
  }

  removeFromCollection(keyCol, pokeid){
    this.collectionService.removePokemonFromCollection(keyCol, pokeid);
  }


  
  

}
