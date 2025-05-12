import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SideMenuComponent } from 'src/utilities/side-menu/side-menu.component';

@Component({
  selector: 'app-mobile-navbar',
  imports: [NgIf, SideMenuComponent, RouterLink, RouterLinkActive],
  templateUrl: './mobile-navbar.component.html',
})
export class MobileNavbarComponent {
  githubUrl: string = 'https://github.com/sailendrachettri';
  linkedInUrl: string = 'https://linkedin.com/in/sailendrachettri';
  logo: string = 'assets/icons/Z.png';

  showMenu: boolean = false;

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
