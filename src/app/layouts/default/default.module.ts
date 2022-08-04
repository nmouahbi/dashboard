import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import {  MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { EducationComponent } from 'src/app/modules/education/education.component';
import { ExperienceComponent } from 'src/app/modules/experience/experience.component';
import { SkillsComponent } from 'src/app/modules/skills/skills.component';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { ProjectsComponent } from 'src/app/modules/projects/projects.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
