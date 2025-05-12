import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { LargeHeadingWrapperComponent } from 'src/utilities/large-heading-wrapper/large-heading-wrapper.component';
import { SmallHeadingWrapperComponent } from 'src/utilities/small-heading-wrapper/small-heading-wrapper.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIf,
    LargeHeadingWrapperComponent,
    SmallHeadingWrapperComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  // Getting the path name
  currentPath: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url; // Get the current pathname
    // console.log('Current Path:', this.currentPath);
  }

  // LINKS FOR PROJECT ASSETS
  img1_waadiyon = 'assets/projects/01_waadiyo.png';
  img2_emaildb = 'assets/projects/02_emaildb.jpg';
  img3_food_panda = 'assets/projects/03_food_panda.png';
  img4_compressor = 'assets/projects/04_img_comp.jpg';
  img5_blog = 'assets/projects/05_blog.jpg';
  img6_gktraveller = 'assets/projects/06_gktraveller.jpg';
  img7_gk = 'assets/projects/07_gk.jpg';
  img8_text_analyzer = 'assets/projects/08_text_ana.jpg';
  img9_check_list = 'assets/projects/09_check_list.jpg';

  npmPackagesUrl: string = 'https://www.npmjs.com/~bytesberry';

  // PROJECTS DEMO LINK
  waadiyon: string = 'https://waadiyon.onrender.com';
  emailDb: string = 'https://emailsdb.onrender.com';
  foodPanda: string = 'https://foodpandaz.onrender.com';
  compressor: string = 'https://reducer.onrender.com';
  blog: string = 'https://codebinds.onrender.com';
  gkTraveller: string = 'https://gtraveller.onrender.com';
  generalKnowledge: string = 'https://gk-site.netlify.app';
  textAnalyzer: string = 'https://tanalyzer-site.netlify.app';
  checklist: string = 'https://checklist-site.netlify.app';
}
