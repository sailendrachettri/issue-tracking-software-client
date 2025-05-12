import { Routes } from '@angular/router';
import { HomepageComponent } from './areas/public/homepage/homepage.component';
import { SystemAdminHomeComponent } from './areas/auth/system-admin/system-admin-home/system-admin-home.component';


export const routes: Routes = [
  // ------------------------------------------------Public Route------------------------------------------------
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },


  // -----------------------------------------Dashboard Route-----------------------------------------
  {
    path: 'auth/role/system-admin',
    component: SystemAdminHomeComponent,
  },

];
