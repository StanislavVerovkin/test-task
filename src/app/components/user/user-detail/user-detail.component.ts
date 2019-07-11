import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiGitService} from '../../../shared/services/api-git.service';
import {UserDetailModel} from '../../../shared/interfaces/user-detail.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: any;
  user: UserDetailModel;

  constructor(
    private route: ActivatedRoute,
    private apiGitService: ApiGitService,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.apiGitService.getUserById(this.id)
        .pipe(
          take(1)
        )
        .subscribe((user: any) => {
          this.user = user;
          console.log(this.user);
        });
    }
  }
}