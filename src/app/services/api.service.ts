import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // সরাসরি RapidAPI endpoint ব্যবহার
 private liveMatchesUrl = 'https://cricket-api-free-data.p.rapidapi.com/matches/live';


  constructor(private http: HttpClient) { }

  getLiveMatches(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '61b6b57f53mshc7eb647c443ca25p188ad0jsn7eaf76d01337',
      'X-RapidAPI-Host': 'cricket-api-free-data.p.rapidapi.com'
    });

    return this.http.get(this.liveMatchesUrl, { headers });
  }
}
