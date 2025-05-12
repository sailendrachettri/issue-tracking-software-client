import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { getGreetingMessage } from 'src/utilities/functions/getGreetingMessage';

@Component({
  selector: 'app-sidebar',
  standalone: true, // Standalone component
  imports: [NgClass, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  pathname: string = '';
  greetingMessage: string = 'Welcome Back';

  constructor(private router: Router) {
    console.log(this.router.url);
    this.pathname = this.router.url;
  }

  ngOnInit() {
    this.greetingMessage = getGreetingMessage();
  }
}
