import {_Event} from "./_event.command";
import {MessagePosition} from "../const/message-position.const";
import {EventCommand} from "../const/event-commanad.const";
import {eventFactory} from "./_event.factory";

/**
 * ShowMessage
 * An event command to show a message in the dialog box.
 * Command structure in JSON:
 * {
 *  "eventCommand": "DIALOG_SHOW_MESSAGE",
 *  "unitRes": string,
 *  "position": string,
 *  "message": string
 *  }
 *  unitRes: string - The unit resource to display in the dialog box.
 *  position: string - The position of the message in the dialog box. Possible values are "TOP", "MIDDLE", and "BOTTOM". Command object without this value will be ignored.
 *  message: string - The message to display in the dialog box.
 */
export class ShowMessage extends _Event {

  public unitRes: string;
  public position: MessagePosition;
  public message: string;

  public constructor(input: any) {
    super(EventCommand.SHOW_MESSAGE);
    this.unitRes = input.unitRes;
    this.position = input.position;
    this.message = input.message;
  }

  protected setInteractionRequired(): boolean {
    return true;
  }

}
