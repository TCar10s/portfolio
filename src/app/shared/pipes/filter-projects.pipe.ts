import { Pipe, PipeTransform } from '@angular/core';
import { Project } from 'src/app/interfaces/card.interface';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Pipe({
  name: 'filterProjects',
})
export class FilterProjectsPipe implements PipeTransform {
  constructor(private portfolioService: PortfolioService) {}

  setTotalProjects(value: number) {
    this.portfolioService.setTotalProjects = value;
  }

  transform(projects: Project[], term: string): Project[] {
    if (term === 'All') {
      this.setTotalProjects(projects.length);
      return projects;
    };

    const filteredProjects = projects.filter(({ technologies }) =>
      technologies.toLowerCase().includes(term.toLowerCase())
    );

    this.setTotalProjects(filteredProjects.length);

    return filteredProjects;
  }
}
