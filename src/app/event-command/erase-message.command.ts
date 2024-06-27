import {_Event} from "./_event.command";
import {EventCommand} from "../const/event-commanad.const";
import {eventFactory} from "./_event.factory";

/**
 * EraseMessage
 * An event command to erase a message from the dialog box.
 * Command structure in JSON:
 * {
 *   "eventCommand": "DIALOG_ERASE_MESSAGE",
 *   "eraseTop": boolean,
 *   "eraseMiddle": boolean,
 *   "eraseBottom": boolean
 * }
 * eraseTop: boolean - Erase the message at the top of the dialog box. Default is true.
 * eraseMiddle: boolean - Erase the message at the middle of the dialog box. Default is true.
 * eraseBottom: boolean - Erase the message at the bottom of the dialog box. Default is true.
 */
export class EraseMessage extends _Event {

  eraseTop = true;
  eraseMiddle = true;
  eraseBottom = true;

  constructor(input: any) {
    super(EventCommand.DIALOG_ERASE_MESSAGE);
    this.eraseTop = input?.eraseTop ?? this.eraseTop;
    this.eraseMiddle = input?.eraseMiddle ?? this.eraseMiddle;
    this.eraseBottom = input?.eraseBottom ?? this.eraseBottom;
  }

  protected setInteractionRequired(): boolean {
    return false;
  }

}
