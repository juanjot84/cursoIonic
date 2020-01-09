import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  getTopHeadLines() {
    return this.http.get<RespuestaTopHeadlines>(`
    https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=14a043bcfc164e369a6a076aa9c7e67a`);
  }


}
