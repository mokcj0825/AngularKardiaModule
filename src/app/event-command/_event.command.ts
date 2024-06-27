import {ShowMessage} from "./show-message.command";
import {EventCommand} from "../const/event-commanad.const";
import {EraseMessage} from "./erase-message.command";


export abstract class _Event {

  public pendingInteraction: boolean;
  public eventCommand: String;

  constructor(eventCommand: String) {
    this.eventCommand = eventCommand;
    this.pendingInteraction = this.setInteractionRequired();
  }

  protected abstract setInteractionRequired(): boolean

}

