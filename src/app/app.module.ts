import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterProjectsPipe } from './shared/pipes/filter-projects.pipe';
import { SidebarComponent } from './layouts/sidebar.component';
import { MainComponent } from './layouts/main.component';
import { ProjectsComponent } from './layouts/projects.component';
import {
  BlogComponent,
  CertificatesComponent,
  ExperiencesComponent,
  FilterProjectsComponent,
  HobbiesComponent,
  PersonalDetailsComponent,
  ProjectComponent,
  SkillsComponent,
  ToggleComponent,
} from './components';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ProjectComponent,
    SkillsComponent,
    BlogComponent,
    ExperiencesComponent,
    HobbiesComponent,
    FilterProjectsComponent,
    ToggleComponent,
    CertificatesComponent,
    FilterProjectsPipe,
    SidebarComponent,
    MainComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    NgOptimizedImage
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
