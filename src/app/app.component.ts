import { Component } from '@angular/core';
import { GhibliApiService } from './ghibli-api.service';

interface FilmValue{
  id: number,
  title: string,
  description: string,
  image: string,
  image_url: string,
  director: string,
  release_date: string,
  rt_score: string

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ghibli';
  
  filmsDataArray: FilmValue[] = []

  constructor(private filmsData: GhibliApiService){
    this.filmsData.fetchFilmsData().subscribe((data: []) => {
      this.filmsDataArray = data
    })
  }

}
