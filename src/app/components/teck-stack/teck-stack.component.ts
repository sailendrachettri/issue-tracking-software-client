import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SmallHeadingWrapperComponent } from 'src/utilities/small-heading-wrapper/small-heading-wrapper.component';
import { LargeHeadingWrapperComponent } from 'src/utilities/large-heading-wrapper/large-heading-wrapper.component';

@Component({
  selector: 'app-teck-stack',
  imports: [NgFor, SmallHeadingWrapperComponent, LargeHeadingWrapperComponent],
  templateUrl: './teck-stack.component.html',
})
export class TeckStackComponent {
  skills = [
    'JavaScript',
    'ReactJs',
    'Angular',
    'Express',
    'JWT',
    'NodeJs',
    'Git & Github',
    'HTML & CSS',
    'Python',
    'MongoDB',
    'Tailwind CSS',
    'C & C++',
    'Bootstrap',
    'Material UI',
    'Netlify & Renders',
    'DigitalOcean',
    'Logo Design',
    'JSON',
    'API integration',
    'Responsive Web Design',
    'Data Structure',
    'Algorithms',
    'NPM',
    'Postman',
    'PostgreSQL',
  ];
}
