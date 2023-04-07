import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <app-skills [skills]="portfolioService.skills"></app-skills>
    <div class="mb-5"></div>
    <app-hobbies [hobbies]="portfolioService.hobbies"></app-hobbies>
  `,
})
export class SidebarComponent {
  constructor(public portfolioService: PortfolioService) {}
}
