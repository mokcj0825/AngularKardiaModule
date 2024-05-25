import {MessageActions} from "../const/message-actions";
import {StartingActions} from "../const/starting-actions";
import {DialogPosition} from "../const/dialog-position";

export class Data {

  readonly startingAction: StartingActions;
  readonly messageList: Command[];
  readonly finishAction: MessageActions;
  readonly returnTo: string;
  readonly nextMessageId: number;

  constructor(input: any) {
    this.startingAction = input.startingAction;
    this.messageList = input.messageList;
    this.finishAction = input.finishAction;
    this.returnTo = input.returnTo;
    this.nextMessageId = input.nextMessageId;
  }

  getStartingAction(): StartingActions {
    return this.startingAction;
  }

  getMessageList(): Command[] {
    return this.messageList;
  }

  getFinishAction(): MessageActions {
    return this.finishAction;
  }

  getReturnTo(): string {
    return this.returnTo;
  }

  getNextMessageId(): number {
    return this.nextMessageId;
  }
}

export class Command {
  readonly content: string;
  readonly position: DialogPosition;

  constructor(input: any) {
    this.content = input.content;
    this.position = input.position;
  }

  getContent(): string {
    return this.content;
  }

  getPosition(): DialogPosition {
    return this.position;
  }

}
