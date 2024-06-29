import {Directive, Input, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FinishEvent} from "../pages/dialog-scene/data";

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy {

  @Input()
  public scriptId: string = "";

  protected mFinishSignal = false;
  protected subscription = new Subscription();

  protected finishInstruction!: FinishEvent

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.loadEventData(this.scriptId);
  }

  abstract loadEventData(messageId: string): void

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  abstract executeCommand(): void

  /**
   * A wrap-up method to handle after last command was executed.
   */
  abstract executeTerminationCommand(): void

}
