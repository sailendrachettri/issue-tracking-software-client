import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard-components/dashboard/dashboard.component';
// import { WorkOnProgressComponent } from 'src/utilities/work-on-progress/work-on-progress.component';
import { AxiosService } from 'src/app/api/axios.service';
import { GET_DASHBOARD_DETAILS_URL } from 'src/app/api/api_routing_urls';

@Component({
  selector: 'app-system-admin-home',
  imports: [DashboardComponent],
  templateUrl: './system-admin-home.component.html',
  styleUrl: './system-admin-home.component.css',
})
export class SystemAdminHomeComponent implements OnInit {
  underDevelopment: string = 'assets/gifs/dev.gif';

  constructor(private axiosService: AxiosService) {}

  dashboardDetails: any;
  async ngOnInit() {
    const response = await this.axiosService.axiosInstance(
      GET_DASHBOARD_DETAILS_URL
    );

    console.log(response.data);
    this.dashboardDetails = response.data;
  }
}
