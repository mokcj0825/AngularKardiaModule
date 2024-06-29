import {_Event} from "../../event-command/_event.command";
import {SceneCommand} from "../../const/scene.const";

/**
 * Basic structure for Dialog object.
 */
export class Data {
  readonly events: _Event[];
  readonly finishEvent: FinishEvent;

  constructor(input: any) {
    this.events = input.events;
    this.finishEvent = input.finishEvent;
  }

}

export class FinishEvent {
  readonly nextScene: SceneCommand;
  readonly nextScript: string;

  constructor(input: any) {
    this.nextScene = input.nextScene;
    this.nextScript = input.nextScript;
  }
}
