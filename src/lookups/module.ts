import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NglIconsModule} from '../icons/module';
import {NglPillsModule} from '../pills/module';
import {NglMenusModule} from '../menus/module';
import {NglInternalOutletModule} from '../util/outlet.module';

import {NglLookup} from './lookup';
import {NglLookupItemTemplate, NglLookupLabelTemplate, NglLookupHeader} from './item';
import {NglLookupScopeItem} from './scope-item';

export {NglLookup} from './lookup';
export {NglLookupItemTemplate, NglLookupLabelTemplate, NglLookupHeader} from './item';
export {NglLookupScopeItem} from './scope-item';

import {NglInternalLookupScope} from './scope';

const NGL_LOOKUP_DIRECTIVES = [
  NglLookup,
  NglLookupItemTemplate,
  NglLookupScopeItem,
  NglLookupLabelTemplate,
  NglLookupHeader,
];

@NgModule({
  declarations: [NGL_LOOKUP_DIRECTIVES, NglInternalLookupScope],
  exports: [NGL_LOOKUP_DIRECTIVES],
  imports: [CommonModule, FormsModule, NglIconsModule, NglPillsModule, NglMenusModule, NglInternalOutletModule],
})
export class NglLookupsModule {}
