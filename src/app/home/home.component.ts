import { Component, OnInit } from '@angular/core';
import { ShowTrendingService } from '../show-trending.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _ShowTrendingService:ShowTrendingService){}

  customOptions: OwlOptions = {
    autoplay:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10
      }
    },
    nav: true
  }


  moviesList:any[]=[];
  movieId:number=0;
  tvList:any[]=[];
  imgURL:string='https://image.tmdb.org/t/p/original';

  searchText:string='';
  seemore:boolean=false;
  showoverview(){
    this.seemore=true;
  }




  showMovies(){

    this._ShowTrendingService.getTrending('movie').subscribe((data)=>{
    this.moviesList= data.results;
    console.log(data.results);

    })
  }

  showTV(){
    this._ShowTrendingService.getTrending('tv').subscribe((data)=>{
    this.tvList= data.results;
    })
  }

  ngOnInit(): void {
    this.showMovies();
    this.showTV();
  }

}
