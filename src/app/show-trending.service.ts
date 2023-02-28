import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowTrendingService {

  getTrendingPaginated(mediaType:string,pageNumber:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/discover/${mediaType}?api_key=978e78abb24a4a96e6d401aad2542b97&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`)
  }

  getTrending(mediaType:string):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=978e78abb24a4a96e6d401aad2542b97`)
  }

  GetDetails(mediaType:string,id:number):Observable<any>
  {
     return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=978e78abb24a4a96e6d401aad2542b97&language=en-US`)
  }
  GetDetailsPerson(id:number):Observable<any>
  {
     return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=978e78abb24a4a96e6d401aad2542b97&language=en-US`)
  }

  constructor(private http:HttpClient) { }
}
