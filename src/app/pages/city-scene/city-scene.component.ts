import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import {BaseComponent} from "../../base/base.component";
import {_Event} from "../../event-command/_event.command";
import {Router} from "@angular/router";
import {StoreService} from "../../service/store.service";
import {Size} from "./city-config";


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

  mCitySize!: Size;
  mBackground!: string;
  tiles: any[] = [];

  constructor(public apiService: ApiService,
              storeService: StoreService) {
    super(storeService);
  }

  loadEventData(messageId: string) {
    this.apiService.getCityConfig(messageId).subscribe(data => {
      this.mCitySize = data.size;
      this.mBackground = `url(assets/${data.background})`;
      this.initiate();
    })
  }

  initiate() {
    this.generateTiles();
    this.render();
  }

  generateTiles() {
    this.tiles = [];
    this.tiles = Array.from({ length: this.mCitySize.width * this.mCitySize.height }, (_, i) => ({ id: i }));
  }

  render() {
    console.log('Render', this.mCitySize);
  }

  executeCommand() {
  }

  executeTerminationCommand() {
  }

}
