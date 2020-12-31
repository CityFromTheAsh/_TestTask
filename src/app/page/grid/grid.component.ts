import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from 'src/app/service/request.service';
import { GridImages } from 'src/app/shared/interface/grid-images';

@Component({
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit {
  images$: Observable<GridImages | undefined>;

  constructor(private readonly request: RequestService, private readonly router: Router) {
    this.images$ = this.request.getImages$();
  }

  nav(page: number): void {
    console.log(page);
    this.images$ = this.request.getImages$(page);
  }

  navigateTo(id: string): void {
    this.router.navigate([`photo/${id}`]);
  }

  ngOnInit(): void {
  }

}
