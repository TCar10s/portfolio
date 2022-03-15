import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  code = `

var firstName = 'Bob';
let lastName = 'Bobson';
const age = 20;

// Runs without issue
firstName = 'John';
// Runs without issue
lastName = 'Smith';
// Error: Reassignment to constant
age = 80;

  `;

  constructor() {}

  ngOnInit(): void {}
}
