import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-heading-wrapper',
  standalone: true,
  imports: [],
  template: `
    <h2
      class="text-xl md:text-2xl lg:text-5xl pt-3 capitalize"
      [class.text-center]="is_center"
    >
      {{ heading || 'My Custom Heading' }}
    </h2>
  `,
})
export class LargeHeadingWrapperComponent {
  @Input() heading!: string;
  @Input() is_center: boolean = false;
}
