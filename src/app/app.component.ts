import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonPageComponent} from "./pages/button-page/button-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {registerAllEvents} from "./event-command/_event.registration";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonPageComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends Component {
  title = 'AngularModule';

  ngOnInit() {
    registerAllEvents();
  }
}
