import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  auth$: Observable<boolean>;
  constructor(private readonly request: RequestService, private readonly router: Router) {
    this.auth$ = this.request.auth$;
   }
   navHome(): void {
    this.router.navigate(['photos']);
   }
}
