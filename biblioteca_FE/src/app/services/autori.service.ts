import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autore } from '../models/autore';
import { Observable } from 'rxjs';

const urlAutoreEndPoint = 'http://localhost:8080/api/autore'
@Injectable({
  providedIn: 'root'
})
export class AutoreService {

  constructor(private http:HttpClient) { }

  getAllAutori(): Observable<Autore[]>{
    return this.http.get<Autore[]>(urlAutoreEndPoint+'/autori');
  }
}

