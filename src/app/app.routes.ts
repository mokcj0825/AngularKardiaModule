import {provideRouter, Routes} from '@angular/router';
import {DialogSceneComponent} from "./pages/dialog-scene/dialog-scene.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ButtonPageComponent} from "./pages/button-page/button-page.component";
import {TheatrePageComponent} from "./pages/theatre-page/theatre-page.component";

export const routes: Routes = [
  {
    path: 'lab', component: ButtonPageComponent
  },
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'theatre', component: TheatrePageComponent
  },
];
