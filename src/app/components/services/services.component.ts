import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  featherCommand,
  featherCpu,
  featherLayers,
  featherSlack,
  featherSliders,
  featherWind,
} from '@ng-icons/feather-icons';
import { LargeHeadingWrapperComponent } from 'src/utilities/large-heading-wrapper/large-heading-wrapper.component';
import { SmallHeadingWrapperComponent } from 'src/utilities/small-heading-wrapper/small-heading-wrapper.component';

@Component({
  selector: 'app-services',
  imports: [NgIcon, SmallHeadingWrapperComponent, LargeHeadingWrapperComponent],
  viewProviders: [
    provideIcons({
      featherWind,
      featherSliders,
      featherCommand,
    }),
  ],

  templateUrl: './services.component.html',
})
export class ServicesComponent {}
