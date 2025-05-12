import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';

@Component({
  selector: 'app-landing-page',
  imports: [NgIcon],
  viewProviders: [provideIcons({ octMarkGithub })],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  bg = 'assets/backgrounds/bg.png';
  github_url: string = 'https://github.com/sailendrachettri';
  resume: string = 'https://drive.google.com/file/d/10V7j5lAsDgffbvn6j9cSjWwGLQLbY-nz/view?usp=sharing';
}
