import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <div
      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  `,
  styles: [
    `
      .toggle-checkbox:checked {
        @apply right-0 border-primary;
        right: 0;
      }
      .toggle-checkbox:checked + .toggle-label {
        @apply bg-green-400 bg-primary;
      }
    `,
  ],
})
export class ToggleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
