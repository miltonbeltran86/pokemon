import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  books: any[];
  constructor(private favoritesServices: FavoritesService){

  }
  ngOnInit() {
    this.favoritesServices.listFavorites().subscribe(list =>{
      this.books = list;
    })
  }

 

}
