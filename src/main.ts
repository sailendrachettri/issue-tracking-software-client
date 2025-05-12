import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Include existing providers from appConfig
    provideHotToastConfig(),
  ],
}).catch((err) => console.error(err));
