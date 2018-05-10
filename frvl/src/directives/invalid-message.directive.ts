import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {AbstractControl, ControlContainer, FormGroup, FormGroupDirective} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[frvlInvalidMessage]'
})
export class InvalidMessageDirective implements OnInit, OnDestroy {

  @Input() frvlInvalidMessage: string;
  @Input() inputElem: string;
  @Input() invalidMessageClass: string;
  control: AbstractControl;
  private controlSubscription: Subscription;
  private fromElem: HTMLElement;
  private isValid = true;

  constructor(
    private _fg: ControlContainer,
    private _el: ElementRef,
    private render: Renderer2
  ) { }


  ngOnInit(): void {
    this.control = this.form.get(this.frvlInvalidMessage);
    this.controlSubscription = this.control.valueChanges.subscribe(() => {
      this.setVisible();
    });
    this.fromElem = document.getElementById(this.inputElem);
  }

  private setVisible() {

    if (this.control.invalid && this.control.dirty) {
      this.render.removeStyle(this._el.nativeElement, 'display');
      this.render.addClass(this.fromElem, this.invalidMessageClass);
      this.isValid = false;
    } else {
      this.render.setStyle(this._el.nativeElement, 'display', 'none');
      if (!this.isValid) {
        this.render.removeClass(this.fromElem, this.invalidMessageClass);
        this.isValid = true;
      }
    }
  }

  match(error: string) {
    if (this.control && this.control.errors) {
      if (Object.keys(this.control.errors).indexOf(error) > -1) {
        return true;
      }
    }
    return false;
  }

  get form(): FormGroup { return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null; }

  ngOnDestroy(): void {
    this.controlSubscription.unsubscribe();
  }

}
