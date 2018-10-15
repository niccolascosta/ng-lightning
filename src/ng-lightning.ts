import {NgModule, ModuleWithProviders} from '@angular/core';


import {NglIconsModule} from './icons/module';
import {NglImagesModule} from './images/module';
import {NglLookupsModule} from './lookups/module';
import {NglMenusModule} from './menus/module';
import {NglPillsModule} from './pills/module';
import {NglButtonsModule} from './buttons/module';
import {INglConfig} from './config/config.interface';
import {NglConfig, NGL_CONFIG} from './config/config';


export {NglIconsModule} from './icons/module';
export {NglImagesModule} from './images/module';
export {NglLookupsModule} from './lookups/module';
export {NglMenusModule} from './menus/module';
export {NglPillsModule} from './pills/module';
export {NglButtonsModule} from './buttons/module';

export {INglConfig} from './config/config.interface';
export {NglConfig} from './config/config';

const MODULES = [
  NglIconsModule,
  NglImagesModule,
  NglLookupsModule,
  NglMenusModule,
  NglPillsModule,
  NglButtonsModule,
];

@NgModule({
  exports: MODULES,
})
export class NglModule {
  static forRoot(config: INglConfig = {}): ModuleWithProviders {
    return {
      ngModule: NglModule,
      providers: [
        { provide: NGL_CONFIG, useValue: config },
        NglConfig,
      ],
   };
 }
}
