import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import {Data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static DIALOG_RESPONSE = '/assets/dialog-';
  static CITY_RESPONSE = '/assets/city-';

  constructor(private http: HttpClient) {
  }

  getDialog(index = '0'): Observable<Data> {
    return this.http.get<Data>(ApiService.DIALOG_RESPONSE + index + '.json');
  }

  getCity(index = '0'): Observable<Data> {
    return this.http.get<Data>(ApiService.CITY_RESPONSE + index + '.json');
  }
}
