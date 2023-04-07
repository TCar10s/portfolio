import { Component, Input, OnInit } from '@angular/core';
import { Hobbie } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-hobbies',
  template: `
    <section class="card">
      <h1 class="text-2xl font-medium text-gray-2">Hobbies</h1>

      <div class="md:flex-column md:gap-10">
        <div *ngFor="let item of hobbies" class="mt-5 md:w-full">
          <img
            rel="preload"
            as="image"
            [ngSrc]="item.image"
            width="400"
            height="200"
            alt="hobbie"
            class="rounded-2xl bg-cover md:object-cover md:max-h-[176px] md:w-full"
          />
          <h2 class="mt-5 font-semibold text-gray-1">{{ item.name }}</h2>
          <p class="mt-2 text-gray-3">{{ item.description }}</p>
        </div>
      </div>
    </section>
  `,
})
export class HobbiesComponent {
  @Input() hobbies: Hobbie[] = [];
}
