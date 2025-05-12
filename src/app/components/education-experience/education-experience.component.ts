import { Component } from '@angular/core';
import { LargeHeadingWrapperComponent } from 'src/utilities/large-heading-wrapper/large-heading-wrapper.component';
import { SmallHeadingWrapperComponent } from 'src/utilities/small-heading-wrapper/small-heading-wrapper.component';

@Component({
  selector: 'app-education-experience',
  standalone: true,
  imports: [SmallHeadingWrapperComponent, LargeHeadingWrapperComponent],
  templateUrl: './education-experience.component.html',
})
export class EducationExperienceComponent {}
