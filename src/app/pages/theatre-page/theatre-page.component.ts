import {Component, OnDestroy, OnInit} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ComponentType, StoreService} from "../../service/store.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {DialogSceneComponent} from "../dialog-scene/dialog-scene.component";
import {CitySceneComponent} from "../city-scene/city-scene.component";

@Component({
  selector: 'app-theatre-page',
  standalone: true,
  imports: [RouterModule, AsyncPipe, DialogSceneComponent, CommonModule, CitySceneComponent],
  templateUrl: './theatre-page.component.html',
  styleUrl: './theatre-page.component.scss',
  providers: []
})
export class TheatrePageComponent implements OnInit, OnDestroy {

  dialogComponentState$ = this.storeService.getComponentState(ComponentType.DIALOG);
  cityComponentState$ = this.storeService.getComponentState(ComponentType.CITY);

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    /**
     * Initialization of the game.
     */
    //this.routeToDialog('0000');
    this.routeToCity('0000');
  }

  routeToDialog(scriptId: string) {
    this.storeService.setComponentState(ComponentType.DIALOG, true, scriptId);
  }

  routeToCity(scriptId: string) {
    this.storeService.setComponentState(ComponentType.CITY, true, scriptId);
  }

  ngOnDestroy() {
  }

}
