import { Component, Input, OnInit } from '@angular/core';

interface Developer {
  name: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  @Input() developer!: Developer;

  constructor() {}

  ngOnInit(): void {}
}
