import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Form,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngxpert/hot-toast';
import { ADD_NEWSLETTER_SUBSCRIPTION_EMAIL_URL } from 'src/app/api/api_routing_urls';
import { AxiosService } from 'src/app/api/axios.service';

@Component({
  selector: 'app-newsletters',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './newsletters.component.html',
})
export class NewslettersComponent {
  constructor(private axiosService: AxiosService) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  private toastService = inject(HotToastService);

  async newslettersSubscribed() {
    try {
      if (this.email.valid) {
        console.log('Email:', this.email.value);
        const data: any = { email: this.email.value };
        const response = await this.axiosService.axiosPrivate.post(
          ADD_NEWSLETTER_SUBSCRIPTION_EMAIL_URL,
          data
        );

        console.log({ response });

        this.email.reset('');
        this.toastService.success('Newsletter subscribed successfully!');
      } else {
        console.log('Invalid email');
        this.toastService.error('oops! Please try again later');
      }
    } catch (error) {
      console.log('Invalid email');
      this.toastService.error('oops! Please try again later');
    }
  }
}
