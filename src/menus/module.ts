import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglDropdownTrigger} from './dropdown-trigger';
import {NglDropdown} from './dropdown';
import {NglDropdownItem} from './dropdown-item';

const NGL_DROPDOWN_DIRECTIVES = [
  NglDropdown,
  NglDropdownTrigger,
  NglDropdownItem,
];

export {NglDropdownTrigger} from './dropdown-trigger';
export {NglDropdown} from './dropdown';
export {NglDropdownItem} from './dropdown-item';

@NgModule({
  declarations: [NGL_DROPDOWN_DIRECTIVES],
  exports: [NGL_DROPDOWN_DIRECTIVES],
  imports: [CommonModule],
})
export class NglMenusModule {}
