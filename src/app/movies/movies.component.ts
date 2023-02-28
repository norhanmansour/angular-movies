import { Component, OnInit } from '@angular/core';
import { ShowTrendingService } from '../show-trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})


export class MoviesComponent implements OnInit{
  constructor(private _ShowTrendingService:ShowTrendingService){}

  moviesList:any[]=[];
  imgURL:string='https://image.tmdb.org/t/p/original';

  showMovies(){
    this._ShowTrendingService.getTrending('movie').subscribe((data)=>{
    this.moviesList= data.results;

    })
  }

  showTrendingDataPaginated(pageNumber:number){
    this._ShowTrendingService.getTrendingPaginated('movie',pageNumber).subscribe((data)=>{
      console.log(data);
     this.moviesList= data.results;

    })
  }

  ngOnInit(): void {
    this.showMovies();
  }

}

