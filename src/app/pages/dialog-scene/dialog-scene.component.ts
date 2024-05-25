import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../zygote/api";
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {StartingActions} from "../../const/starting-actions";
import {Command} from "../../zygote/data";
import {NgIf} from "@angular/common";

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

}
