import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  logo: string = 'assets/icons/Z.png';
  githubUrl: string = 'https://github.com/sailendrachettri';
  linkedIn: string = 'https://linkedin.com/in/sailendrachettri';
  leetcodeUrl: string = 'https://leetcode.com/sailendraz';
  codeforcesUrl: string = 'https://codeforces.com/profile/sailendraz';
  npmPackagesUrl:string = 'https://www.npmjs.com/~bytesberry';

  // Listining the menu open state when hanburger click and closing according
  @Input()
  state: boolean = false;
  @Output() stateChange = new EventEmitter<boolean>();

  toggleState() {
    this.state = !this.state;
    this.stateChange.emit(this.state);
    console.log(this.state);
  }

  // Detect the outside of the menubar click and update the state
  constructor(private elementRef: ElementRef) {}
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // If the click is outside the component, set state to false
      this.state = false;
      this.stateChange.emit(this.state);
    }
  }

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
