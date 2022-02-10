import { Component, Input, OnInit } from '@angular/core';
import { Hobbie } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
  @Input() hobbies: Hobbie[] = [];

  constructor() {}

  ngOnInit(): void {}
}
