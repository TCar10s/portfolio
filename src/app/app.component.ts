import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="flex items-center justify-end mb-5">
      <app-toggle></app-toggle>
    </div>

    <div
      class="grid gap-5 grid-areas-slim sm:grid-areas-medium xl:grid-areas-wide"
    >
      <div class="grid-in-details">
        <app-personal-details
          [developer]="portfolioService.developer"
        ></app-personal-details>
      </div>

      <div class="grid-in-sidebar">
        <app-sidebar></app-sidebar>
      </div>

      <div class="grid-in-main">
        <app-main></app-main>
      </div>

      <div class="grid-in-certificates">
        <app-certificates
          [certificates]="portfolioService.certificates"
        ></app-certificates>
      </div>

      <div class="grid-in-projects">
        <app-projects></app-projects>
      </div>
    </div>
  `,
  styles: [
    `
      #particles-js {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(public portfolioService: PortfolioService) {}

  public ngOnInit(): void {
    const theme = localStorage.getItem('theme');

    theme ? this.loadParticles('dark') : this.loadParticles('light');
  }

  private loadParticles(theme: string): void {
    // particlesJS.load(
    //   'particles-js',
    //   `./assets/json/particles-${theme}.json`,
    //   null
    // );
  }
}
