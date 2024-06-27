import { Component } from '@angular/core';
import {BaseComponent} from "../../base/base.component";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
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

  constructor(public override route: ActivatedRoute,
              public override router: Router) {
    super(route, router);
  }

  override ngOnInit() {
    registerAllEvents();
  }

  override loadEventData(messageId: string) {

  }

  routeToCreateNewGame() {
    const messageId = '0000';
    this.router.navigate(['/theatre']);
  }

  routeToExitGame() {

  }

}
