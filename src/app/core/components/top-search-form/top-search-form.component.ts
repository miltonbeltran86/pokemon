import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessagesService } from 'src/app/alerts/services/messages.service';

@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.css']
})
export class TopSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor(private msgService: MessagesService) { }

  ngOnInit() {
  }

  searchBooks(data: string) {
    console.log("searchBooks")
    
    console.log(data)
    console.log("searchBooks")
   // this.search.emit(data);
   this.msgService.namePokemon(data);
    
  }

}
