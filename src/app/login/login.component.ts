import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,
    private _Router:Router ,
    private _ToastrService:ToastrService

    ){}

   loginform:FormGroup = new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)])
  })

  loginForm(){
    if(this.loginform.invalid)
    {
      this._ToastrService.error('error!', 'login erroe');
           return;
    }
    this._AuthService.signIn(this.loginform.value).subscribe((data)=>{
      console.log(data);

      if(data.message=='success'){

        localStorage.setItem('userToken',data.token);
        this._AuthService.saveUserData();

        this._Router.navigateByUrl('/home');

        this._ToastrService.success('welcome ' + data.user.first_name, 'success login...');
      }
      else{
        this._ToastrService.error(data.message, 'Error');
      }

    })

  }

}
