import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../zygote/api";
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-dialog-scene',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  templateUrl: './dialog-scene.component.html',
  styleUrl: './dialog-scene.component.scss',
  providers: [ApiService]
})
export class DialogSceneComponent extends BaseComponent implements OnInit {

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
        console.log('Response from API: ' + response.messageList[0]);
      }, error => {
        console.log('Error calling API:' + error.toString());
      }
    ));
  }

}
