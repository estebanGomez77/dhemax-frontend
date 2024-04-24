import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ChargeMapService {
  private apiKey = '67e43866-252e-4d38-889d-748380c914f5';
  private apiUrl = "https://api.openchargemap.io/v3/poi?key="+this.apiKey; // URL to web api &maxresults=10

  constructor(private http: HttpClient) { }

  public getFrase(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
