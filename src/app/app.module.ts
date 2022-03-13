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
import { ToggleComponent } from './components/toggle/toggle.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { FilterProjectsPipe } from './shared/pipes/filter-projects.pipe';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainComponent } from './layouts/main/main.component';
import { ProjectsComponent } from './layouts/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
