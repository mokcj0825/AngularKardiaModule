import {_Event} from "./_event.command";

class EventFactory {
  private eventConstructors: Map<String, (input: any) => _Event> = new Map();

  public registerEvent(eventCommand: String, constructor: (input: any) => _Event) {
    this.eventConstructors.set(eventCommand, constructor);
  }

  public create(eventType: String, input: any): _Event {
    if (!this.eventConstructors.has(eventType)) {
      throw new Error(`No constructor registered for type: ${eventType}`);
    }
    return this.eventConstructors.get(eventType)!(input);
  }
}

export const eventFactory = new EventFactory();
