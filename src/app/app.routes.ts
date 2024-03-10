import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { AitrackerComponent } from './aitracker/aitracker.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExerciseComponent } from './exercise/exercise.component';




export const routes: Routes = [
  
  {
    path:'',pathMatch:'full',redirectTo:'home'
  },
  {
    path:'home','title':'Home', component: HomeComponent
  },

  {
    path:'workoutplan','title':'workoutplane', component: WorkoutplanComponent
  },

{
   path:'aitracker','title':'aitracker', component: AitrackerComponent
},
{
  path:'exercise','title':'exercise', component: ExerciseComponent
},

{
path:'about','title':'about', component: AboutComponent
},
{
  path:'login','title':'login', component:LoginComponent
},
{
  path:'dashboard','title':'dashboard', component:DashboardComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }