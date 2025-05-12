import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  date = new Date();
  year = this.date.getFullYear();

  githubUrl: string = 'https://github.com/sailendrachettri';
  linkedIn: string = 'https://linkedin.com/in/sailendrachettri';
  leetcodeUrl: string = 'https://leetcode.com/sailendraz';
  codeforcesUrl: string = 'https://codeforces.com/profile/sailendraz';
}
