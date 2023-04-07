import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificates',
  template: `
    <section class="card">
      <h1 class="text-2xl text-gray-2">Certificates</h1>

      <div class="grid md:grid gap-x-5 md:grid-cols-2">
        <div class="flex mt-12" *ngFor="let item of certificates">
          <a [href]="item.link" target="_blank">
            <img
              rel="preload"
              as="image"
              loading="lazy"
              [src]="item.image"
              class="rounded-lg h-14 w-h-14"
              alt="certificate"
            />
          </a>
          <div class="w-9/12 ml-8 md:w-4/5">
            <p class="text-sm text-gray-2">{{ item.expedition }}</p>
            <h2 class="font-semibold leading-10 text-gray-1">
              {{ item.name }}
            </h2>

            <p class="mt-5">
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
export class CertificatesComponent {
  @Input() certificates: any[] = [];
}
