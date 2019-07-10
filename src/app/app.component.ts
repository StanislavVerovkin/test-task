import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiGitService} from './shared/services/api-git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;
  users = [];

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
    this.apiGitService.getUsersByName(value.name)
      .subscribe((data: any) => {
        this.users = data.items.map((element) => {
          return {
            login: element.login,
            score: element.score,
            image: element.avatar_url,
          };
        });
        this.form.reset();
        console.log(this.users);
      });
  }
}
