import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ChargeMapService {
  private apiKey = environment.apiKey;
  private apiUrl = "https://api.openchargemap.io/v3/poi?key="+this.apiKey; 

  constructor(private http: HttpClient) { }

  public getMaps(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
