import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {NglModule} from 'ng-lightning/ng-lightning';

import {Plunker} from './playground/plunker';

import {DemoBadges} from './components/badges/badges';
import {DemoBreadcrumbs} from './components/breadcrumbs/breadcrumbs';
import {DemoButtons} from './components/buttons/buttons';
import {DemoDatatables} from './components/datatables/datatables';
import {DemoDatepickers} from './components/datepickers/datepickers';
import {DemoForms} from './components/forms/forms';
import {DemoIcons} from './components/icons/icons';
import {DemoAvatars} from './components/images/images';
import {DemoLookups} from './components/lookups/lookups';
import {DemoMenus} from './components/menus/menus';
import {DemoModals} from './components/modals/modals';
import {DemoNotifications} from './components/notifications/notifications';
import {DemoPaginations} from './components/paginations/paginations';
import {DemoPick} from './components/pick/pick';
import {DemoPicklist} from './components/picklist/picklist';
import {DemoPills} from './components/pills/pills';
import {DemoPopovers} from './components/popovers/popovers';
import {DemoRatings} from './components/ratings/ratings';
import {DemoSections} from './components/sections/sections';
import {DemoSpinners} from './components/spinners/spinners';
import {DemoTabs} from './components/tabs/tabs';

const DEMO_COMPONENTS = [
  DemoBadges, DemoBreadcrumbs, DemoButtons, DemoDatatables, DemoDatepickers,
  DemoForms, DemoIcons, DemoAvatars, DemoLookups, DemoMenus,
  DemoModals, DemoNotifications, DemoPaginations, DemoPick, DemoPicklist,
  DemoPills, DemoPopovers, DemoRatings, DemoSections, DemoSpinners,
  DemoTabs,
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NglModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ...DEMO_COMPONENTS,
    Plunker,
  ],
  exports: [
    ...DEMO_COMPONENTS,
    Plunker,
  ],
})
export class NglDemoComponentsModule {}
