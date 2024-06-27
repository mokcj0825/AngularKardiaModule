import {Directive, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy {

  @Input()
  public scriptId: string = "";

  protected subscription = new Subscription();

  constructor(public route: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit(): void {

    this.loadEventData(this.scriptId);
  }

  abstract loadEventData(messageId: string): void

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //abstract executeCommand(commands: Event): void

  //abstract onBaseClick(): void

}
