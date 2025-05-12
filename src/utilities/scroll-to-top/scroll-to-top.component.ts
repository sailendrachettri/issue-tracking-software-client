import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  imports: [NgIf],
  template: `
    <div *ngIf="isScrolled" class="right-7 lg:right-10 bottom-10 fixed">
      <div
        (click)="scrollToTop()"
        class="bg-secondary h-9 w-9 lg:h-12 lg:w-12 p-2 rounded-full flex justify-center items-center text-primary cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
    </div>
  `,
})
export class ScrollToTopComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button when the user has scrolled down 100px
    this.isScrolled = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
