import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowTrendingService } from '../show-trending.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  currentId:number=0;
  currentItem:any;
  imgURL:string='https://image.tmdb.org/t/p/original';

  constructor(private _ActivatedRoute:ActivatedRoute,private _ShowTrendingService:ShowTrendingService){}
  ngOnInit(): void {
  this.currentId= this._ActivatedRoute.snapshot.params['id'];
  //this.currentperson= this._ActivatedRoute.snapshot.params['person'];
  this.showPersonDetails();
  }

  showPersonDetails(){
    this._ShowTrendingService.GetDetailsPerson(this.currentId).subscribe((data)=>{
      console.log(data);
      this.currentItem=data;

    })

}




}

