import { Component, OnInit } from '@angular/core';
import { ShowTrendingService } from '../show-trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})


export class PeopleComponent implements OnInit{
  constructor(private _ShowTrendingService:ShowTrendingService){}
  ngOnInit(): void {
    this.showPerson();
  }

  personList:any[]=[];
  imgURL:string='https://image.tmdb.org/t/p/original';

  showPerson(){
    this._ShowTrendingService.getTrending('person').subscribe((data)=>{
    this.personList= data.results;

    })
  }




  }







