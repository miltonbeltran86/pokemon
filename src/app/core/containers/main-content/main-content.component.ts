import { Component, OnInit, Input } from '@angular/core';
import { books } from "../../../books";
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { IMessage } from 'src/app/alerts/message';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  _dataBook: string;

  @Input()
  get dataBook(): string {
    return this._dataBook;
  }

  set dataBook(data : string) {

    console.log("databook1")
    this._dataBook = data;
  }

  books : any[] = [];

  constructor(private msgService:MessagesService) { 

  }

  ngOnInit() {
    window.addEventListener('online',this.updateConnection.bind(this));
    window.addEventListener('offline',this.updateConnection.bind(this));

 
  }

  updateConnection(event){
    let msg:IMessage;
    if(event.type == 'online'){
      msg = {msg: 'se ha establecido conexion de red', type:'success'};

    }else if(event.type == 'offline'){
      msg = {msg: 'se ha perdido conexion de red', type:'error'};

    } 
    this.msgService.message(msg);
  }

 



}
