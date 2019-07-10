import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {ApiGitService} from '../../../shared/services/api-git.service';
import {UserDetailModel} from '../../../shared/interfaces/user-detail.model';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  user: UserDetailModel;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public id,
    private route: ActivatedRoute,
    private apiGitService: ApiGitService,
  ) {
  }

  ngOnInit() {
    console.log(this.id);

    this.apiGitService.getUserById(this.id)
      .subscribe((user: any) => {
        this.user = user;
        console.log(this.user);
      });
  }
}
