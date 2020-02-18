import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  static readonly GET_Static_URL = 'https://static.chorus.ai/api/'; 


  getTranscript(staticId): Observable<any> {
    const url = DatabaseService.GET_Static_URL +staticId+'.json';
    return this.http.get(url);
  }

  getVideo(staticId){
    return DatabaseService.GET_Static_URL + staticId +'.mp4';
  }

}