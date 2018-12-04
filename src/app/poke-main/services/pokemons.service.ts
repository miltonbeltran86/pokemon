import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private productsUrl = 'api/items';  // URL to web ap
  constructor(private http: HttpClient) { }

  /** GET - productos desde el servidor */
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl).pipe(tap(products => console.log(`Obtiene los productos`)), catchError(this.handleError('getProducts', [])));
  }


  getProduct(name: string): Observable<any> {

    //const url = `${this.productsUrl}/${id}`;

    

 
let params = new HttpParams()
    .set('volumeInfo.title', name);
    const result = this.http.get<any[]>('api/items/',{ params});
    //console.log(result.)
    return result;
    //return this.http.get<any>(url).pipe(tap(_ => console.log(`obtiene producto id=${id}`)), catchError(this.handleError<any>(`getProduct id=${id}`)));
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
