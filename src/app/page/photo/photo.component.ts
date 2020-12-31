import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, mergeMap } from 'rxjs/operators';
import { RequestService } from 'src/app/service/request.service';
import { GridImages } from 'src/app/shared/interface/grid-images';
import { ImageInfo } from 'src/app/shared/interface/image-data';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';

@Component({
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {
  imageData$: Observable<ImageInfo | undefined>;
  zoom = 1;
  private ids: string[] = [];
  constructor(private readonly request: RequestService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly router: Router) {
    this.imageData$ = activatedRoute.params.pipe(mergeMap(({ id }) => this.request.getImage$(id)));
    const images = this.request.getImages$() as Observable<GridImages>;
    images.pipe(first(item => !!item), map(({ pictures }) => pictures.map((({ id }) => id))))
      .subscribe(ids => this.ids = ids)
  }

  nav(index: number): void {
    this.activatedRoute.params.pipe(map(({ id }) => id), first()).subscribe((id) => {
      const _index = this.ids && this.ids.indexOf(id);
      const photo_id = this.ids[_index + index];
      if (!!photo_id) {
        this.router.navigate([`photo/${photo_id}`]);
      }
    });
  }

  changeZoom(changes: number): void {
    if (this.zoom > 2.4 && changes > 0) {
      return;
    }
    if (this.zoom < 0.2 && changes < 0) {
      return;
    }
    this.zoom += (changes * 0.1);
  }
  openFullSize(data: string): void {
    const width = 'fit-content';
    this.dialog.open(PhotoDialogComponent, { width, data });
  }

  ngOnInit(): void {
  }

}
