import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css'
})
export class ButtonPageComponent implements OnDestroy {

  private subscription = new Subscription()

  public outputMessage = ''
  constructor(private http: HttpClient) {
  }
  callApi() {
    this.subscription = this.http.get('http://localhost:8000/api/Testing/').subscribe(response => {
      this.outputMessage = 'Response from API: ' + response.toString();
    }, error => {
      this.outputMessage = 'Error calling API:' + error.toString();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
