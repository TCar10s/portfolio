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
  styles: [
    `
      .details__figcaption {
        @apply md:ml-6 flex flex-col justify-between;
      }

      .details__title {
        @apply mt-4 md:flex md:justify-between md:items-center;
      }
    `,
  ],
})
export class PersonalDetailsComponent {
  @Input() developer!: Developer;
}
