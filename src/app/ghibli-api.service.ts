import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GhibliApiService {

  constructor(private httpClient: HttpClient) { }

  fetchFilmsData(){
    return this.httpClient.get('http://localhost:3333')
  }
}
