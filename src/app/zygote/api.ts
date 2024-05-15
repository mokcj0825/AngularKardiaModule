import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Data} from "./data";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  static RESPONSE = '/assets/response.json';


  constructor(private http: HttpClient) {
  }

  getApi(index = '0'): Observable<Data> {
    return this.http.get<Data>(ApiService.RESPONSE);
  }
}
