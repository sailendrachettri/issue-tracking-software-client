import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DashboardComponent } from '../../dashboard-components/dashboard/dashboard.component';
import { GET_CONTACT_DETAILS_URL } from 'src/app/api/api_routing_urls';
import { AxiosService } from 'src/app/api/axios.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-contacts-dashboard',
  imports: [DashboardComponent, NgFor, NgIf],
  templateUrl: './contacts-dashboard.component.html',
  styleUrl: './contacts-dashboard.component.css',
})
export class ContactsDashboardComponent implements OnInit {
  constructor(private axiosService: AxiosService) {}

  contacts: any;

  async ngOnInit() {
    const response = await this.axiosService.axiosInstance.get(
      GET_CONTACT_DETAILS_URL
    );

    this.contacts = response?.data?.contacts;
    console.log(this.contacts);
    console.log('this.contacts: ', this.contacts);
  }

  viewMessage: boolean = false;
  messageDetails: string = '';
  messageFrom: string = '';

  handleViewMessage(contact_id: number) {
    const data = this.contacts.filter(
      (obj: any) => obj.contact_id === contact_id
    );

    this.messageDetails = data[0]?.message || 'No message available';
    this.messageFrom = data[0]?.full_name || 'Unknown';

    this.viewMessage = true;
  }
}
