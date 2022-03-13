import { Component } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter = '';
  constructor(public portfolioService: PortfolioService) {}
}
