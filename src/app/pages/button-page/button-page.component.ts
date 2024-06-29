import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {ApiService} from "../../zygote/api";
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.scss',
  providers: [ApiService]
})
export class ButtonPageComponent extends BaseComponent {

  public outputMessage = ''
  public outputMessage2 = ''
  constructor(private http: HttpClient,
              private apiService: ApiService,
              public override router: Router) {
    super(router);
  }

  override loadEventData(messageId: string) {
  }

  callApi() {
    this.subscription = this.http.get('http://localhost:8000/api/Testing/').subscribe(response => {
      this.outputMessage = 'Response from API: ' + response.toString();
    }, error => {
      this.outputMessage = 'Error calling API:' + error.toString();
    });
  }

  callApi2() {
    this.subscription.add(
      this.apiService.getDialog().subscribe(response => {
        this.outputMessage2 = 'Response from API: ' + response.messageList[0];
        debugger;
      }, error => {
        this.outputMessage2 = 'Error calling API:' + error.toString();
      }
    ));
  }

  override executeCommand(): void {
    throw new Error('Method not implemented.');
  }
  override executeTerminationCommand(): void {
    throw new Error('Method not implemented.');
  }

}
