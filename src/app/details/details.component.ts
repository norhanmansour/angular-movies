import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowTrendingService } from '../show-trending.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currentId:number=0;
  currentItem:any;
  imgURL:string='https://image.tmdb.org/t/p/original';

  constructor(private _ActivatedRoute:ActivatedRoute,private _ShowTrendingService:ShowTrendingService){}
  ngOnInit(): void {
  this.currentId= this._ActivatedRoute.snapshot.params['id'] ;
  this.currentMediaType=this._ActivatedRoute.snapshot.params['mediaType']
  this.showDetails();
  }


   currentMediaType:string='';
  showDetails(){
    this._ShowTrendingService.GetDetails(this.currentMediaType,this.currentId).subscribe((data)=>{
      console.log(data);
      this.currentItem=data;

    })
  }






}
