import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
