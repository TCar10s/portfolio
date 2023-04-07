import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-skills',
  template: `
    <section class="card">
      <h1 class="text-lg font-bold text-gray-2">SKILLS</h1>

      <div class="mt-3">
        <div class="flex items-center mt-4" *ngFor="let skill of skills">
          <p class="inline w-3/4 md:w-1/2 text-gray-3">{{ skill.name }}</p>
          <div class="flex flex-col w-full ml-4">
            <div class="w-full h-3.5 bg-gray-300 dark:bg-body-dark rounded-md">
              <div
                class="flex items-center justify-center w-full h-full rounded-md bg-primary"
                [ngStyle]="{ width: skill.level }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  @Input() skills: Skill[] = [];
}
