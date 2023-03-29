import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

// declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
