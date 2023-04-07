import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-filter-projects',
  template: `
    <section class="card">
      <h1 class="mb-5 text-2xl text-gray-1">Projects ({{ totalProjects }})</h1>
      <div class="flex flex-wrap gap-3">
        <button
          class="btn-filter"
          *ngFor="let button of buttons"
          (click)="emitFilter(button)"
        >
          {{ button }}
        </button>
      </div>
    </section>
  `,
})
export class FilterProjectsComponent implements OnInit {
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();

  buttons: string[] = ['Angular', 'Responsive', 'DevChallenge', 'Games', 'All'];
  totalProjects!: number;
  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getTotalProjects.subscribe((totalProjects) => {
      this.totalProjects = totalProjects;
    });
  }

  emitFilter(filter: string) {
    this.onFilter.emit(filter);
  }
}
