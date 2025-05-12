import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-heading-wrapper',
  standalone: true,
  imports: [],
  template: `
    <h1 class="uppercase text-secondary text-[12px] sm:text-base lg:text-xl">
      {{ heading || 'Some Heading' }}
    </h1>
  `,
})
export class SmallHeadingWrapperComponent {
  @Input() heading!: string;
}
