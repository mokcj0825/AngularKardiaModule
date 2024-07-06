import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private states = {
    [ComponentType.DIALOG]: new BehaviorSubject<ComponentState>({ isVisible: false, scriptPath: '' }),
    [ComponentType.CITY]: new BehaviorSubject<ComponentState>({ isVisible: false, scriptPath: '' }),
    [ComponentType.BATTLEFIELD]: new BehaviorSubject<ComponentState>({ isVisible: false, scriptPath: '' }),
    [ComponentType.MENU]: new BehaviorSubject<ComponentState>({ isVisible: false, scriptPath: '' })
  };

  constructor() {
  }

  setComponentState(type: ComponentType, isVisible: boolean, scriptPath: string) {
    this.states[type].next({ isVisible, scriptPath });
  }

  getComponentState(type: ComponentType): Observable<ComponentState> {
    return this.states[type].asObservable();
  }
}

export enum ComponentType {
  DIALOG = 'DIALOG',
  CITY = 'CITY',
  BATTLEFIELD = 'BATTLEFIELD',
  MENU = 'MENU'
}

export interface ComponentState {
  isVisible: boolean;
  scriptPath: string;
}
