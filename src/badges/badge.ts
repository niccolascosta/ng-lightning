import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'ngl-badge',
  templateUrl: './badge.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglBadge {
  @Input() type: string;
};
