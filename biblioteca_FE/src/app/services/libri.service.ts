import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import {HttpClient} from '@angular/common/http';

const urlLocalHost = 'http://localhost:8080/api/libro';
const getMapping = '/libri'

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  constructor(private http: HttpClient) { }

  getLibri(): Observable<Libro[]>{
    return this.http.get<Libro[]>(urlLocalHost + getMapping);
  }
}
