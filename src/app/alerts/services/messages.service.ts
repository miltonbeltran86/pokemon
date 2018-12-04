import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMessage } from '../message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private subject = new Subject<IMessage>();

  private dataSearch = new Subject<string>();

  constructor() { }

  message(msg: IMessage){
    this.subject.next(msg);
  }

  getMessage(): Observable<IMessage>{
    return this.subject.asObservable();
  }

  namePokemon(msg: string){
    this.dataSearch.next(msg);
  }

  getNamePokemon(): Observable<string>{
    return this.dataSearch.asObservable();
  }
}
