import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-experiences',
  template: `
    <section class="card ">
      <h1 class="text-2xl text-gray-2">Experiences</h1>

      <div class="md:flex md:gap-10">
        <div class="flex mt-8" *ngFor="let item of experiences">
          <img
            rel="preload"
            as="image"
            [ngSrc]="item.logo"
            class="rounded-lg h-14 w-h-14"
            alt="experience"
            width="55"
            height="200"
          />
          <div class="w-9/12 ml-8 md:w-4/5">
            <h1 class="mb-1 text-xl font-semibold dark:text-white">
              {{ item.company }}
            </h1>
            <p class="text-sm text-gray-2">{{ item.time }}</p>
            <h2 class="font-semibold leading-10 text-gray-1">
              {{ item.position }}
            </h2>

            <p class="mt-3">
              <span class="font-medium text-gray-3"
                >{{ item.description }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperiencesComponent {
  @Input() experiences: Experience[] = [];
}