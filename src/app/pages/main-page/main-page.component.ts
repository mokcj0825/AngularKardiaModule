import { Component } from '@angular/core';
import {BaseComponent} from "../../base/base.component";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  providers: []
})
export class MainPageComponent extends BaseComponent {

  constructor(private router: Router) {
    super();
  }

  routeToCreateNewGame() {
    const messageId = '0000';
    this.router.navigate(['/dialog-scene', messageId]);
  }

  routeToExitGame() {

  }

}
