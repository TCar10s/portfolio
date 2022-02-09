import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences: Experience[] = [];

  constructor() {}

  ngOnInit(): void {}
}
