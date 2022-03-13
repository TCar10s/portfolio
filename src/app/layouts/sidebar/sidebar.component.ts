import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <app-skills [skills]="portfolioService.skills"></app-skills>
    <div class="my-5"></div>
    <app-hobbies [hobbies]="portfolioService.hobbies"></app-hobbies>
  `,
  styles: [],
})
export class SidebarComponent implements OnInit {
  constructor(public portfolioService: PortfolioService) {}

  ngOnInit(): void {}
}
