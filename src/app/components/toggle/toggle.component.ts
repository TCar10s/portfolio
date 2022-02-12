import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <div
      class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        #toggleInput
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle"
        (change)="onChange()"
      />
      <label
        for="toggle"
        class="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-white cursor-pointer shadow-sm"
      ></label>
    </div>
  `,
  styles: [
    `
      .toggle {
        @apply bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent
               toggle-checkbox absolute block w-6 h-6 rounded-full border-2
               appearance-none cursor-pointer;
      }

      .toggle-checkbox:checked {
        right: 0;
        border: none;
        background-color: #5EEAD4;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='%23FFF' viewBox='0 0 24 24' stroke='rgb(129 124 214)' > <path strokeLinecap='round' strokeLinejoin='round' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' /> </svg>");
      }
      .toggle-checkbox:checked + .toggle-label {
        background-color: #040D19;
      }
    `,
  ],
})
export class ToggleComponent implements OnInit, AfterViewInit {
  @ViewChild('toggleInput') toggle!: ElementRef<HTMLInputElement>;
  html: HTMLElement = document.documentElement;

  constructor() {}

  ngOnInit(): void {
    const theme = localStorage.theme;

    theme
      ? this.html.classList.add('dark')
      : this.html.classList.remove('dark');
  }

  ngAfterViewInit() {
    if (localStorage.theme) {
      this.toggle.nativeElement.checked = true;
    }
  }

  onChange() {
    const theme = localStorage.theme;

    if (theme) {
      this.html.classList.remove('dark');
      localStorage.removeItem('theme');
    } else {
      this.html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
