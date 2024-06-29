import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ApiService} from "./api.service";
import {_Event} from "../../event-command/_event.command";
import {ShowMessage} from "../../event-command/show-message.command";
import {EventCommand} from "../../const/event-commanad.const";
import {MessagePosition} from "../../const/message-position.const";
import {EraseMessage} from "../../event-command/erase-message.command";
import {eventFactory} from "../../event-command/_event.factory";
import {SceneCommand} from "../../const/scene.const";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-dialog-scene',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule, FormsModule],
  templateUrl: './dialog-scene.component.html',
  styleUrl: './dialog-scene.component.scss',
  providers: [ApiService]
})
export class DialogSceneComponent extends BaseComponent implements OnInit, OnDestroy {

  private events: _Event[] = [];
  private currentEventIndex = 0;

  mRequireExtraInteraction = false;

  mDisplayMessage = true;
  mDisplayOptions = false;
  mDisplayInput = false;
  mDisplayOverlay = false;

  mDisplayTop = false;
  mContentTop = '';
  mDisplayMiddle = false;
  mContentMiddle = '';
  mDisplayBottom = false;
  mContentBottom = '';


  constructor(public apiService: ApiService,
              public override router: Router) {
    super(router);
  }

  loadEventData(messageId: string) {
    this.apiService.getDialog(messageId).subscribe(data => {
      this.events = data.events.map(i => eventFactory.create(i.eventCommand, i));
      this.finishInstruction = data.finishEvent;
      this.initiateEvents();
    });
  }

  initiateEvents() {
    this.currentEventIndex = 0;
    this.executeCommand();
  }

  executeCommand() {
    const executingCommand = this.events[this.currentEventIndex];
    switch (executingCommand.eventCommand) {
      case EventCommand.SHOW_MESSAGE:
        this.displayMessage(executingCommand as ShowMessage);
        break;
      case EventCommand.ERASE_MESSAGE:
        this.eraseMessage(executingCommand as EraseMessage);
        break;
      default:
        console.log('Unknown command');
        break;
    }
    this.currentEventIndex++;
    if(this.currentEventIndex < this.events.length) {
      if(!executingCommand.pendingInteraction) {
        this.executeCommand();
      }
    } else {
      this.mFinishSignal = true;
    }

  }

  displayMessage(input: ShowMessage) {
    this.mRequireExtraInteraction = false;
    switch (input.position) {
      case MessagePosition.TOP:
        this.mDisplayTop = true;
        this.mContentTop = input.message;
        break;
      case MessagePosition.MIDDLE:
        this.mDisplayMiddle = true;
        this.mContentMiddle = input.message;
        break;
      case MessagePosition.BOTTOM:
        this.mDisplayBottom = true;
        this.mContentBottom = input.message;
        break;
      default:
        console.log('Unknown message position');
        break;
    }
  }

  eraseMessage(input: EraseMessage) {
    this.mRequireExtraInteraction = false;
    if(input.eraseTop) {
      this.mDisplayTop = false;
      this.mContentTop = '';
    }
    if(input.eraseMiddle) {
      this.mDisplayMiddle = false;
      this.mContentMiddle = '';
    }
    if(input.eraseBottom) {
      this.mDisplayBottom = false;
      this.mContentBottom = '';
    }
  }

  onBaseClick() {
    if(this.mFinishSignal) {
      this.executeTerminationCommand();
    } else {
      this.executeCommand();
    }

  }

  onInteracted() {
    console.log('Interacted');
  }

  executeTerminationCommand() {
    console.log(this.finishInstruction);
    switch (this.finishInstruction.nextScene) {
      case SceneCommand.DIALOG:
        break;
      case SceneCommand.CITY:
        break;
      default:
        throw error('Unidentified command.')
    }
  }

}
