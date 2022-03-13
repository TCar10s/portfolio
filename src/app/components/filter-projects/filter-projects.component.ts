import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-filter-projects',
  templateUrl: './filter-projects.component.html',
  styleUrls: ['./filter-projects.component.scss'],
})
export class FilterProjectsComponent implements OnInit {
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();

  buttons: string[] = ['Angular', 'Responsive', 'DevChallenge', 'All'];
  totalProjects!: number;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getTotalProjects.subscribe((totalProjects) => {
      this.totalProjects = totalProjects;
    });
  }
}
