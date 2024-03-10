import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AitrackerComponent } from './aitracker/aitracker.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent,HomeComponent,WorkoutplanComponent,AitrackerComponent,AboutComponent,FooterComponent,LoginComponent,DashboardComponent,ExerciseComponent]
})
export class AppComponent {
  title = 'app';
}
