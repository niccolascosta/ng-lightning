import {Component, Input, Output, EventEmitter, HostBinding, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngl-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section.pug',
  host: {
    '[class.slds-section]': 'true',
  },
})
export class NglSection {

  @Input() title: string;

  @HostBinding('class.slds-is-open')
  @Input() open = false;

  @Output() openChange = new EventEmitter<boolean>();

  toggle(event: Event) {
    event.preventDefault();
    this.openChange.emit(!this.open);
  }
}
