import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  baseApiUrl = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersByName(name): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/search/users?q=${name}`);
  }

  getUserById(id): Observable<any> {
    return this.http.get(`${this.baseApiUrl}/user/${id}`);
  }
}
