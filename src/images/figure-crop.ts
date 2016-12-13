import {Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[nglCrop]',
})
export class NglFigureCrop {

  @Input() set nglCrop(ratio: '16-by-9' | '4-by-3' | '1-by-1') {
    const nativeElement = this.element.nativeElement;
    this.renderer.setElementClass(nativeElement, 'slds-image__crop', !!ratio);

    if (this._ratio) {
      this.renderer.setElementClass(nativeElement, `slds-image__crop--${this._ratio}`, false);
    }

    if (ratio) {
      this.renderer.setElementClass(nativeElement, `slds-image__crop--${ratio}`, true);
    }

    this._ratio = ratio;
  }

  private _ratio;

  constructor(private element: ElementRef, private renderer: Renderer) {}
}
