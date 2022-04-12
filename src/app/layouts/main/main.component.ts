import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-main',
  template: `
    <app-blog></app-blog>
    <div class="mb-5"></div>
    <app-experiences [experiences]="portfolioService.experiences"></app-experiences>
  `,
  styles: [],
})
export class MainComponent implements OnInit {
  constructor(public portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
