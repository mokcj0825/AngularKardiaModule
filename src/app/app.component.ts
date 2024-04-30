import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonPageComponent} from "./pages/button-page/button-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularModule';
}
