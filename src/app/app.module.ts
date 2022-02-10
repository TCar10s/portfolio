import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FilterProjectsComponent } from './components/filter-projects/filter-projects.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
