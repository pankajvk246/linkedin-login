import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LinkedinServiceService } from '../linkedin-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-linked-in-login-response',
  templateUrl: './linked-in-login-response.component.html',
  styleUrls: ['./linked-in-login-response.component.css'],
})
export class LinkedInLoginResponseComponent implements OnInit {
  baseUrl = 'https://www.linkedin.com/oauth/v2/accessToken';

  linkedInToken = '';
  obj:any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private api: LinkedinServiceService
  ) {}

  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    this.obj = {
      grant_type: 'authorization_code', // value of this field should always be: 'authorization_code'
      code: this.linkedInToken,
      redirect_uri: 'http://localhost:4200/linkedInLogin', // The same redirect_url used in step 2.1 (in login.component.ts)
      client_id: '78d2yc32suuebz', // Follow step 1.2
      client_secret: 'bOgpFeLyI6lZMUJW', // Follow step 1.2
    };
  }

  post() {
    console.log(this.obj);
    this.postToken().subscribe((res) => {
      console.log(res, 'res');
    });
    console.log('hello');
  }

  postToken() {
    return this.http.post(this.baseUrl,this.obj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
