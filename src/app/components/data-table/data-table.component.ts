import {Component, Input, OnInit} from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import {BottomSheetComponent} from '../user-detail/bottom-sheet/bottom-sheet.component';
import {UserDetailComponent} from '../user-detail/user-detail.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() public users;
  @Input() public isLoaded;

  constructor(
    private _bottomSheet: MatBottomSheet,
  ) {
  }

  ngOnInit() {
  }

  openBottomSheet(id): void {
    this._bottomSheet.open(BottomSheetComponent, {
      data: id
    });
  }
}
