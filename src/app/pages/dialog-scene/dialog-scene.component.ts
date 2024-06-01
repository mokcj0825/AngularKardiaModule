import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../zygote/api";
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {StartingActions} from "../../const/starting-actions";
import {Command, FinishAction} from "../../zygote/data";
import {NgIf} from "@angular/common";
import {MessageActions} from "../../const/message-actions";
import {DialogCommand} from "../../const/dialog-command";

@Component({
  selector: 'app-dialog-scene',
  standalone: true,
  imports: [HttpClientModule, RouterModule, NgIf],
  templateUrl: './dialog-scene.component.html',
  styleUrl: './dialog-scene.component.scss',
  providers: [ApiService]
})
export class DialogSceneComponent extends BaseComponent implements OnInit {

  mMessageList: Command[] = [];
  mIndex: number = 0;
  mFinishAction: FinishAction = new FinishAction();

  mDisplayTop = false;
  mContentTop = '';
  mDisplayMiddle = false;
  mContentMiddle = '';
  mDisplayBottom = false;
  mContentBottom = '';

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        const messageId = params.get('messageId');
        console.log('Message ID: ' + messageId);
        if (messageId != null) {
          this.loadMessage(messageId);
        }
      })
    )

  }

  loadMessage(messageId: string) {
    this.subscription.add(
      this.apiService.getApi(messageId).subscribe(response => {
        if(response.startingAction == StartingActions.CLEAR_ALL) {
          this.resetDisplay();
        }
        this.mMessageList = response.messageList;
        this.mFinishAction = response.finishAction;
        this.showFirstMessage();
      }, error => {
        console.log('Error calling API:' + error.toString());
      }
    ));
  }

  resetDisplay() {
    this.mDisplayTop = false;
    this.mContentTop = '';
    this.mDisplayMiddle = false;
    this.mContentMiddle = '';
    this.mDisplayBottom = false;
    this.mContentBottom = '';
  }

  showFirstMessage() {
    if(this.mMessageList.length > 0) {
      this.showMessage(this.mMessageList[0]);
    }
  }

  showMessage(message: Command) {
    if(message.command == DialogCommand.SHOW) {
      switch (message.position) {
        case 'TOP':
          this.mDisplayTop = true;
          this.mContentTop = message.content;
          break;
        case 'MIDDLE':
          this.mDisplayMiddle = true;
          this.mContentMiddle = message.content;
          break;
        case 'BOTTOM':
          this.mDisplayBottom = true;
          this.mContentBottom = message.content;
          break;
        default:
          console.error('Invalid position: ' + message.position);
      }
    }
    if(message.command == DialogCommand.CLEAR_ALL) {
      this.resetDisplay();
      this.runNextAction();
    }

  }

  runNextAction() {
    this.mIndex++;
    if(this.mMessageList.length == this.mIndex) {
      this.runEndingScript();
    } else {
      this.showMessage(this.mMessageList[this.mIndex]);
    }
  }

  runEndingScript() {
    switch (this.mFinishAction.finishAction) {
      case MessageActions.ASK_CHOICE:
        console.log("Ask choice");
        break;
      case MessageActions.ASK_STRING:
        console.log("Ask String");
        break;
      case MessageActions.REDIRECT:
        console.log("Redirect");
        break;
      case MessageActions.DO_NOTHING:
        console.log("Do nothing");
        break;
    }
  }

}
