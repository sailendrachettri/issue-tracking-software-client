import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../dashboard-components/dashboard/dashboard.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-system-admin-home',
  imports: [DashboardComponent, NgFor],
  templateUrl: './system-admin-home.component.html',
  styleUrl: './system-admin-home.component.css',
})
export class SystemAdminHomeComponent implements OnInit {


  dashboardDetails: any;
  tableData: any = [];
  async ngOnInit() {
   

    this.tableData = [
      {
        id: 1,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        priority: 'High',
        status: 'Pending',
        openedDate: '10-05-2025',
        daysOld: 15,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, numquam? Culpa eum quae est autem...',
        attachments: 'Attachments',
        createdBy: 'Sailendra',
        assignTo: 'Coder',
        notificationStatus: 'Checked',
      }
    ];

  
  }
}
