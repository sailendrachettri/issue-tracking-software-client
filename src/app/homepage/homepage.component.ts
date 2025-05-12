import { Component } from '@angular/core';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { ServicesComponent } from '../components/services/services.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { EducationExperienceComponent } from '../components/education-experience/education-experience.component';
import { TeckStackComponent } from '../components/teck-stack/teck-stack.component';
import { NewslettersComponent } from '../components/newsletters/newsletters.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarDesktopComponent } from '../components/navbars/navbar-desktop/navbar-desktop.component';
import { MobileNavbarComponent } from '../components/navbars/mobile-navbar/mobile-navbar.component';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollToTopComponent } from '../../utilities/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-homepage',
  imports: [
    NavbarDesktopComponent,
    MobileNavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
    LandingPageComponent,
    ServicesComponent,
    AboutMeComponent,
    EducationExperienceComponent,
    TeckStackComponent,
    NewslettersComponent,
    ProjectsComponent,
  ],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent {
  // Scroll to top when routing
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top
      }
    });
  }
}
