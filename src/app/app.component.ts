import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public portfolioService: PortfolioService) {}

  public ngOnInit(): void {
    particlesJS.load('particles-js', './assets/particles.json', null);
  }
}
