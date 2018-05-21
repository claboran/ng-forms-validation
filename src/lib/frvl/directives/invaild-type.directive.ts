import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {InvalidMessageDirective} from './invalid-message.directive';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[frvlInvaildType]'
})
export class InvaildTypeDirective implements OnInit, OnDestroy {

  @Input() frvlInvaildType: string;
  private hasView = false;
  private controlSubscription: Subscription;
  constructor(
    private invalidMessage: InvalidMessageDirective,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.controlSubscription = this.invalidMessage.control.valueChanges.subscribe(() => {
      this.setVisible();
    });
  }
  private setVisible() {
    if (this.invalidMessage.match(this.frvlInvaildType)) {
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    } else {
      if (this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.controlSubscription !== undefined) {
      this.controlSubscription.unsubscribe();
    }
  }

}
