import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  shortExperienceContentUrl = "https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/6KkCecNO3e8GGNstSoJsNF?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412";
  experienceDetails: any = {
    experienceShortAug19TillDate: "https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/3Yx9FJdHQ0grYp9Sdzs3Eq?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortSep16Aug19:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/4QdWdwS0KsKyTtOpsxWEXe?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortMar15Aug16:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/5sbGS27aBZohIslBPlfDOJ?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortAug14Mar15:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/2NTbSfKv7vxmk4hx5hnX8a?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortJan14Jul14:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/PBgLMEcnikt2ZTxXATEhn?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortJan13Dec13:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/1psfhDy5lIhILvpQeppan3?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortJun12Dec12:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/4XCnMIEs4QcauQ4Np3ijTG?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412",
    experienceShortDec11Jun12:"https://cdn.contentful.com/spaces/hgjyi5lurih3/environments/master/entries/3M3wVQGwhWiCRJCyFJy11C?access_token=b3b3b518c7649017f733b6eaf64952902296ac159f37fc1a30223666fe1c9412"
  };
  httpClient = inject(HttpClient);

  getShortExperienceContent(): Observable<any> {
    return this.httpClient.get(this.shortExperienceContentUrl).pipe(map((response: any) => response.fields));
  }

  getExperienceDetails(experienceId: string): Observable<string> {
    return this.httpClient.get(this.experienceDetails[experienceId]).pipe(map((response: any) => response.fields.experienceDetails));
  }

}
