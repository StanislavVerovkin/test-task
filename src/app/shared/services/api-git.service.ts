import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersByName(name) {
    return this.http.get(`https://api.github.com/search/users?q=${name}`);
  }
}
