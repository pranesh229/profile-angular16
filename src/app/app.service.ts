import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  shortExperienceContentUrl = "https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/6KkCecNO3e8GGNstSoJsNF?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412";
  httpClient = inject(HttpClient);

  getShortExperienceContent(): Observable<any> {
    return this.httpClient.get(this.shortExperienceContentUrl).pipe(map((response: any) => response.fields));
  }

}
