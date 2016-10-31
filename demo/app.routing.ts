import {Routes} from '@angular/router';

import {IntroComponent} from './components/intro/intro';
import {DemoRoute} from './components/demo/demo';
import {SupportComponent} from './components/support/support';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'components', component: DemoRoute},
  { path: 'support', component: SupportComponent},
];
