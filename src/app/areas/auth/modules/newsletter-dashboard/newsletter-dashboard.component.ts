import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard-components/dashboard/dashboard.component';
// import { WorkOnProgressComponent } from 'src/utilities/work-on-progress/work-on-progress.component';
import { AxiosService } from 'src/app/api/axios.service';
import { GET_NEWSLETTER_SUBSCRIPTION_EMAIL_URL } from 'src/app/api/api_routing_urls';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-newsletter-dashboard',
  imports: [DashboardComponent, NgFor, NgIf],
  templateUrl: './newsletter-dashboard.component.html',
  styleUrl: './newsletter-dashboard.component.css',
})
export class NewsletterDashboardComponent implements OnInit {
  constructor(private axiosService: AxiosService) {}

  emailDetails: any;

  async ngOnInit() {
    try {
      const response = await this.axiosService.axiosInstance.get(
        GET_NEWSLETTER_SUBSCRIPTION_EMAIL_URL
      );

      console.log(response);
      this.emailDetails = response.data.contacts;
    } catch (error) {
      console.log('Not able to fetch email detial: ', error);
    }
  }
}
