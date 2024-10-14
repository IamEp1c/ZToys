import { Injectable } from '@angular/core';
import { ZToys } from './ZToys';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ZToysService {


  private url: string = 'http://localhost:8080/toys'; 

  constructor(private http: HttpClient) {}

  getToys(): Observable<ZToys[]> {
    console.log("hello"); 
    return this.http.get<ZToys[]>(this.url); 
  }

  postToys(ztoys: ZToys): Observable<ZToys>{
    return this.http.post<ZToys>(this.url, ztoys)
    // add code later here to handle errors in case a toy is not able to be added
  }
}
