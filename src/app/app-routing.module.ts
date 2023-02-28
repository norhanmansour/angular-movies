
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'people',canActivate:[AuthGuard],component:PeopleComponent},
  {path:'networks',component:NetworksComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'people/people/details/:id/:person',canActivate:[AuthGuard],component:PersonDetailsComponent},
  {path:'details/:id/:mediaType',canActivate:[AuthGuard],component:DetailsComponent},


  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
