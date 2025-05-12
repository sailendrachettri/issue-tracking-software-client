import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HotToastService } from '@ngxpert/hot-toast';
import { ADD_CONTACT_URL } from 'src/app/api/api_routing_urls';
import { AxiosService } from 'src/app/api/axios.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private axiosService: AxiosService
  ) {
    this.contactForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  // Getting the pathname
  currentPath: string = '';

  ngOnInit(): void {
    this.currentPath = this.router.url;
  }

  //  Email newsletter subscription
  private toastService = inject(HotToastService);
  contactForm: FormGroup;
  async submitForm() {
    try {
      if (this.contactForm.valid) {
        console.log('Form submitted:', this.contactForm.value);

        const response = await this.axiosService.axiosPrivate.post(
          ADD_CONTACT_URL,
          this.contactForm.value
        );
        console.log('Data: ', response.data);
        this.toastService.success('Thank you. I will get back to you shortly!');
        // Optionally reset form
        this.contactForm.reset();
        this.router.navigate(['/']);
      } else {
        this.toastService.error('Oops! Please check your form and try again.');
      }
    } catch (error) {
      console.error('Not able to send data:', error);
      this.toastService.error('Network Error! Please try again later.');
    }
  }
}
