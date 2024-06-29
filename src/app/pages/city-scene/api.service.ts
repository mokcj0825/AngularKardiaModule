import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CityConfig} from "./city-config";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static CITY_CONFIG = '/assets/city-config-';
  static CITY_RESPONSE = '/assets/city-';

  constructor(private http: HttpClient) {
  }

  getCityConfig(index = '0'): Observable<CityConfig> {
    return this.http.get<CityConfig>(ApiService.CITY_CONFIG + index + '.json');
  }

}
