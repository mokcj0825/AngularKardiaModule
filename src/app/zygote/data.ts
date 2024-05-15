import {MessageActions} from "../const/message-actions";

export class Data {

  readonly messageList: string[];
  readonly finishAction: MessageActions;
  readonly returnTo: string;
  readonly nextMessageId: number;

  constructor(input: any) {
    this.messageList = input.messageList;
    this.finishAction = input.finishAction;
    this.returnTo = input.returnTo;
    this.nextMessageId = input.nextMessageId;
  }

  getMessageList(): string[] {
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
