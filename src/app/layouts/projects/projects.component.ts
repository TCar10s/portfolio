import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  template: `
    <app-filter-projects (onFilter)="filter = $event"></app-filter-projects>

    <div class="grid-auto-fill mt-5">
      <app-project
        *ngFor="let project of portfolioService.projects | filterProjects: filter"
        [project]="project"
      ></app-project>
    </div>
  `,
  styles: [],
})
export class ProjectsComponent implements OnInit {
  filter = '';

  constructor(public portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
