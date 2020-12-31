import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public url: string) {}

  ngOnInit(): void {
  }

}
