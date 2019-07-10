import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiGitService} from './shared/services/api-git.service';
import {UserModel} from './shared/interfaces/user.model';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  users: UserModel[];
  isLoaded = false;

  constructor(
    private apiGitService: ApiGitService,
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  getErrorMessageName() {
    return this.form.controls.name.hasError('required') ? 'Name is required' : '';
  }

  onSubmit(value) {
    this.isLoaded = true;
    this.apiGitService.getUsersByName(value.name)
      .subscribe((data: any) => {
        this.users = data.items.map((element: UserModel) => {
          return {
            url: element.url,
            login: element.login,
            score: element.score,
            id: element.id,
          };
        });
        this.isLoaded = false;
      });
  }
}
