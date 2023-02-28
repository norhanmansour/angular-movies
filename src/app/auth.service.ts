import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { RegisterRequest } from './register-request';
import { LoginRequest } from './login-request';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private _router:Router) {
    if(localStorage.getItem('userToken')){
     this.saveUserData();
    }
   }

  userData:any=new BehaviorSubject(null); //عشان يسمع لاي تغير  يحصله

  saveUserData(){
   let encodedToken=JSON.stringify(localStorage.getItem('userToken')) ;
   let decodedToken=jwtDecode(encodedToken);
   this.userData.next(decodedToken) ;
   console.log(this.userData);
  }

  signUp(formData:RegisterRequest):Observable<any>
  {
   return this.http.post('https://sticky-note-fe.vercel.app/signup',formData);
  }

  signIn(formData:LoginRequest):Observable<any>
  {
    return this.http.post('https://sticky-note-fe.vercel.app/signin',formData)
  }

  signOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigateByUrl('/login');
  }


}
