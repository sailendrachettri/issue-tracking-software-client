import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollToTopComponent } from '../../utilities/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-homepage',
  imports: [
    ScrollToTopComponent,
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
