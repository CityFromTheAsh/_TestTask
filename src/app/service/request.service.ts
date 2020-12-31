import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthResp } from '../shared/interface/auth-resp';
import { GridImages } from '../shared/interface/grid-images';
import { ImageInfo } from '../shared/interface/image-data';
import { Url } from '../shared/url';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private auth = new BehaviorSubject(false);
  private token = '';
  private request: Observable<AuthResp>;

  private currentRequest: Observable<GridImages | undefined> = of(undefined);
  private get body() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });
    return { headers };
  }

  get auth$() {
    return this.auth.asObservable();
  }
  constructor(private readonly http: HttpClient) {
    const apiKey = "23567b218376f79d9415";
    const body = { apiKey }
    this.request = this.http.post(Url.auth, body) as Observable<AuthResp>;
    this.getToken();
  }

  getImages$(page?: number): Observable<GridImages | undefined> {
    const pageArg = page && page > 0 ? `?page=${page}`: '';
    const url = Url.photo + pageArg;
    this.currentRequest = this.auth$.pipe(mergeMap(auth => (auth ? this.http.get(url, this.body) as Observable<GridImages> : of(undefined))));
    return this.currentRequest
  }

  getImage$(id: string): Observable<ImageInfo | undefined> {
    const url = Url.photo + '/' + id;
    return this.auth$.pipe(mergeMap(auth => (auth ? this.http.get(url, this.body) as Observable<ImageInfo> : of(undefined))));
  }

  private getToken(): void {
    this.request.subscribe(({auth, token}) => {
      this.token = token;
      this.auth.next(auth);
    });
  }
}
