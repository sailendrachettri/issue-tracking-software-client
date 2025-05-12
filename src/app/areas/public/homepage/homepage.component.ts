import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AboutMeComponent } from 'src/app/components/about-me/about-me.component';
import { EducationExperienceComponent } from 'src/app/components/education-experience/education-experience.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { LandingPageComponent } from 'src/app/components/landing-page/landing-page.component';
import { MobileNavbarComponent } from 'src/app/components/navbars/mobile-navbar/mobile-navbar.component';
import { NavbarDesktopComponent } from 'src/app/components/navbars/navbar-desktop/navbar-desktop.component';
import { NewslettersComponent } from 'src/app/components/newsletters/newsletters.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { TeckStackComponent } from 'src/app/components/teck-stack/teck-stack.component';
import { ScrollToTopComponent } from 'src/utilities/scroll-to-top/scroll-to-top.component';

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
