import {Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {Subscription} from "rxjs";
import {FinishEvent} from "../pages/dialog-scene/data";
import {StoreService} from "../service/store.service";

@Directive()
export abstract class BaseComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public scriptId: string = "";
  private oldScriptId = "";

  protected mFinishSignal = false;
  protected subscription = new Subscription();

  protected finishInstruction!: FinishEvent

  constructor(protected storeService: StoreService) {

  }

  ngOnInit(): void {
    this.loadEventData(this.scriptId);
  }

  abstract loadEventData(messageId: string): void

  ngOnChanges() {
    if(this.oldScriptId == "") {
      return;
    }
    if(this.oldScriptId == this.scriptId) {
      return;
    }
    this.oldScriptId = this.scriptId;
    this.loadEventData(this.scriptId);
    this.mFinishSignal = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  abstract executeCommand(): void

  /**
   * A wrap-up method to handle after last command was executed.
   */
  abstract executeTerminationCommand(): void

}
