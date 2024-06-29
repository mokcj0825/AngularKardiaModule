import { Component } from '@angular/core';
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, Event, Router, RouterModule} from "@angular/router";
import {registerAllEvents} from "../../event-command/_event.registration";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  providers: []
})
export class MainPageComponent extends BaseComponent {

  constructor(public override router: Router) {
    super(router);
  }

  override ngOnInit() {
    registerAllEvents();
  }

  override loadEventData(messageId: string) {

  }

  routeToCreateNewGame() {
    this.router.navigate(['/theatre']);
  }

  routeToExitGame() {

  }

  executeCommand() {
  }

  executeTerminationCommand() {

  }

}
