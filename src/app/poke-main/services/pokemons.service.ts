import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from "firebase/app";
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  //private productsUrl = 'api/items';  // URL to web ap
  private productsUrl = 'https://pokeapi.co/api/v2/pokemon/';
  favsRef : AngularFireList<any>;
  colRef : AngularFireList<any>;
  user: firebase.User;
  url: string = environment.apiUrl;
  constructor(private http: HttpClient, private authFire: AngularFireAuth, private rdb: AngularFireDatabase, private alertService: MessagesService) {
    authFire.authState.subscribe(
      user => {
        if(user){
          this.user = user;
          this.favsRef = rdb.list('favorites/'+this.user.uid);
          this.colRef = rdb.list('collections/'+this.user.uid);
        }
      }
    );
   }

   addFavorite(book : any){
    const promise = this.favsRef.push(book);
    promise.then(_=> {
        this.alertService.message({msg:"Libro agregado a favoritos", type:"sucess"})
    })
   }

   addCollection(col : any){
    let tempJson = {'name':'add'}
    console.log(tempJson);
    console.log(col);
    const promise = this.colRef.push(col);
    promise.then(_=> {
        this.alertService.message({msg:"Libro agregado a favoritos", type:"sucess"})
    })
   }

  /** GET - productos desde el servidor */
  getProducts(offset:any, limit:any): Observable<any> {
    return this.http.get<any>(this.productsUrl+"?offset="+offset+"&limit="+limit).pipe(tap(products => console.log(`Obtiene los productos`)), catchError(this.handleError('getProducts', [])));
  }


  getPokemon(url: string): Observable<any> {

    return this.http.get<any>(url).pipe(tap(products => console.log(`Obtiene las colecciones`)), catchError(this.handleError('getProducts', [])));
    //return this.http.get<any>(url).pipe(tap(_ => console.log(`obtiene producto id=${id}`)), catchError(this.handleError<any>(`getProduct id=${id}`)));
  }

  getCollections(url: string): Observable<any> {

    return this.http.get<any>(url).pipe(tap(products => console.log(`Obtiene el pokemon`)), catchError(this.handleError('getProducts', [])));
    //return this.http.get<any>(url).pipe(tap(_ => console.log(`obtiene producto id=${id}`)), catchError(this.handleError<any>(`getProduct id=${id}`)));
  }


  getProduct(name: string): Observable<any> {
    const url = `${this.url}pokemon/${name}/`;
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError(`Get Pokemon by Name (${name})`, null))
    );
   }
   //https://pokeapi.co/api/v2/ability/62/
   getProductForAbilty(id: string): Observable<any> {
    const url = `${this.url}pokemon/${id}/`;
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError(`Get Pokemon by Name (${name})`, null))
    );
  
   }

   getPokemonByUrl(id :string): Observable<any> {
    return this.http.get<any>(this.productsUrl+id)
    .pipe(
      catchError(this.handleError('Get Pokemon', null))
    );
  }
  /**   * Handle Http operation that failed.   * Let the app continue.   * @param operation - name of the operation that failed   * @param result - optional value to return as the observable result   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
