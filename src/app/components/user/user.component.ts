import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../shared/interfaces/user.model';
import {ApiGitService} from '../../shared/services/api-git.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

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
