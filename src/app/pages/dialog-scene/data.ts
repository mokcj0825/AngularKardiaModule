import {StartingActions} from "../../const/starting-actions";
import {DialogCommand} from "../../const/dialog-command";
import {DialogPosition} from "../../const/dialog-position";
import {MessageActions} from "../../const/message-actions";


export class Data {

  readonly startingAction: StartingActions;
  readonly messageList: Command[];
  readonly finishAction: FinishAction;

  constructor(input: any) {
    this.startingAction = input.startingAction;
    this.messageList = input.messageList;
    this.finishAction = input.finishAction;
  }

}

export class Command {
  readonly command: DialogCommand;
  readonly content: string;
  readonly position: DialogPosition;

  constructor(input: any) {
    this.command = input.command;
    this.content = input.content;
    this.position = input.position;
  }

}

export class FinishAction {
  readonly finishAction: MessageActions;
  readonly returnTo: string;
  readonly nextMessageId: number;

  constructor(input =
                {
                  finishAction: MessageActions.DO_NOTHING,
                  returnTo: '',
                  nextMessageId: 0
                }) {
    this.finishAction = input.finishAction;
    this.returnTo = input.returnTo;
    this.nextMessageId = input.nextMessageId;
  }

}
