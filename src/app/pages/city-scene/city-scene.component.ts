import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import {BaseComponent} from "../../base/base.component";
import {_Event} from "../../event-command/_event.command";
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-scene',
  standalone: true,
  imports: [NgIf, CommonModule, FormsModule],
  templateUrl: './city-scene.component.html',
  styleUrl:  './city-scene.component.scss',
  providers: [ApiService]
})
export class CitySceneComponent extends BaseComponent implements OnInit, OnDestroy {

  private events: _Event[] = [];
  private currentEventIndex = 0;

  constructor(public apiService: ApiService,
              public override router: Router) {
    super(router);
  }

  loadEventData(messageId: string) {

  }

  executeCommand() {
  }

  executeTerminationCommand() {
  }

}
