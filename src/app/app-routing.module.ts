import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EducationComponent } from './modules/education/education.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { SkillsComponent } from './modules/skills/skills.component';


const routes: Routes = [
  { path: '', component: DefaultComponent,
    children: [
      { path: '' ,component: DashboardComponent},
      { path: 'education',component: EducationComponent},
      { path: 'experience',component: ExperienceComponent},
      { path: 'project',component: ProjectsComponent},
      { path: 'skills',component: SkillsComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
