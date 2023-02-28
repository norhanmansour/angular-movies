import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService:AuthService,private _ToastrService:ToastrService){}
  isLogin:boolean=false;
  userName:any={};

  logout(){
    this._ToastrService.warning('You will be missed...','Bye Bye');
    this._AuthService.signOut();

  };

  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() !=null){
        this.isLogin=true;
        this.userName=this._AuthService.userData.getValue().first_name;


      }
      else{
        this.isLogin=false;
      }
    })
  }

}
