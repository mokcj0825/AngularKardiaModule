import {EraseMessage} from "./erase-message.command";
import {ShowMessage} from "./show-message.command";
import {eventFactory} from "./_event.factory";

export function registerAllEvents() {
  eventFactory.registerEvent('SHOW_MESSAGE', input => new ShowMessage(input));
  eventFactory.registerEvent('ERASE_MESSAGE', input => new EraseMessage(input));
}
