import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersApiService {
  publicKey = '3f60715b93704636583a807a17a627c0';
  privateKey = '9705da00e58df39207b035a9c27454498aa709d4';
  timeStamp = new Date().getTime().toString();
  md5Hash = Md5.hashStr(this.timeStamp + this.privateKey + this.publicKey);
  baseUrl = `https://gateway.marvel.com:443/v1/public/characters`;
  hashKey = `?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.md5Hash}`;
  constructor(private http: HttpClient) {}

  //Recebendo os herois da API
  getHeroes(pagina: number): Observable<any> {
    let id = pagina > 0 ? pagina * 20 : 0;
    return this.http
      .get(`${this.baseUrl}${this.hashKey}&offset=${id}`)
      .pipe(
        map((data: any) => data.data.results));
  }
  //Encontrar o heroi através do campo de busca
  searchHero(name: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}${this.hashKey}&nameStartsWith=${name}`)
      .pipe(map((data: any) => data.data.results));
  }
  //Ir para a pagina do heroi
  detailsHero(id: any): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}${this.hashKey} `)
      .pipe(map((data: any) => data.data.results));
  }
}
