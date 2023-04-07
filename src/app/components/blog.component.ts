import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <section class="card">
      <div class="xl:flex xl:justify-between xl:gap-5">
        <div class="xl:w-1/2">
          <p class="text-gray-light-1">Recommended publication</p>

          <div class="flex justify-between gap-10 overflow-hidden lg:flex-none">
            <h1 class="mt-4 text-2xl font-medium text-gray-1 w-44">
              JavaScript var, let and const
            </h1>
          </div>

          <p class="mt-10 text-base font-medium lg:mt-6 text-gray-3">
            What do the key words <code>var</code>, <code>let</code> and
            <code>const</code> do?
            <br />
            <br />
            Both <code>let</code> and <code>var</code> can have their values
            changed after declaration and can be initialized without a value.
            Variables declared with <code>const</code> cannot change, and a
            value must be assigned when the variable is declared.
          </p>
        </div>

        <img
          rel="preload"
          as="image"
          loading="lazy"
          src="assets/images/code.webp"
          class="rounded-xl mt-5 w-full xl:max-w-[50%]"
          alt="code"
        />
      </div>
      <a
        href="https://dev.to/fig781/javascript-var-let-and-const-2g57"
        target="_blank"
        class="block mt-6 underline text-primary dark:text-primary-dark"
        >dev.to</a
      >
    </section>
  `,
})
export class BlogComponent {
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

}
