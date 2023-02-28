import { Component, OnInit } from '@angular/core';
import { ShowTrendingService } from '../show-trending.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})


export class TvComponent implements OnInit{
  constructor(private _ShowTrendingService:ShowTrendingService){}

  tvList:any[]=[];
  imgURL:string='https://image.tmdb.org/t/p/original';


  showTV(){
    this._ShowTrendingService.getTrending('tv').subscribe((data)=>{
    this.tvList= data.results;
    console.log(data.results);

    })
  }

  ngOnInit(): void {
    this.showTV();
  }

  showTrendingDataPaginated(pageNumber:number){
    this._ShowTrendingService.getTrendingPaginated('tv',pageNumber).subscribe((data)=>{
      console.log(data);
     this.tvList= data.results;

    })
  }

}

