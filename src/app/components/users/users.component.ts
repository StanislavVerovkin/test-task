import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../shared/models/user.model';
import {ApiGitService} from '../../shared/services/api-git.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  form: FormGroup;
  users: UserModel[];
  isLoaded = false;

  constructor(
    private apiGitService: ApiGitService,
  ) {
  }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  getErrorMessage() {
    return this.form.controls.name.hasError('required') ? 'Name is required' : '';
  }

  onSubmit(value) {
    this.isLoaded = true;
    this.apiGitService.getUsersByName(value.name)
      .subscribe((data: any) => {
        this.users = data.items.map((element: UserModel) => {
          return {
            login: element.login,
            score: element.score,
            id: element.id,
          };
        });
        localStorage.setItem('users', JSON.stringify(this.users));
        this.isLoaded = false;
      });
  }
}
