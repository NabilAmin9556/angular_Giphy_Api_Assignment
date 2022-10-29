import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  searchGifs(gifName: string) {
    return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=pJzNrcaCL9eVTu5CvKT0LcWqFE5pYzUY&q=gifName&limit=30&offset=0&rating=g&lang=en')
    .subscribe((response: any) =>  {
      this.gifs.next(response.data);
    });
  }

  getTrendingGifs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=pJzNrcaCL9eVTu5CvKT0LcWqFE5pYzUY&limit=30')
    .subscribe((response: any) => {
      this.gifs.next(response.data);
    });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}