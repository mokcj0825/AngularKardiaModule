import {Directive, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";

@Directive()
export class BaseComponent implements OnDestroy {

  protected subscription = new Subscription();

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
