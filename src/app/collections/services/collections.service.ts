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

   listCollections():Observable<any[]>{
     return this.colRef.valueChanges();
   }
}
