import { Component, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-project',
  template: `
    <figure class="card">
      <img
        rel="preload"
        as="image"
        loading="lazy"
        [src]="project.image"
        alt="Person"
        class="rounded-xl"
      />

      <figcaption>
        <div class="mt-4">
          <div>
            <h1 class="text-sm font-medium text-gray-2">
              {{ project.technologies }}
            </h1>
            <p class="mt-4 text-2xl font-medium text-gray-1 bg-g">
              {{ project.name }}
            </p>
          </div>
        </div>

        <blockquote class="mt-3 font-medium text-gray-3">
          {{ project.description }}
        </blockquote>

        <div class="mt-8 mb-3">
          <a
            class="btn btn-primary"
            [href]="project.demo"
            target="_blank"
            translate="no"
            >Demo</a
          >
          <a
            *ngIf="project.showCode"
            class="ml-3 btn btn-secondary"
            [href]="project.code"
            target="_blank"
            >Code</a
          >
        </div>
      </figcaption>
    </figure>
  `,
})
export class ProjectComponent {
  @Input() project!: Project;
}
