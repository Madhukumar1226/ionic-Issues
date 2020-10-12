import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient,
  ) {

  }

  ngOnInit(): void {
    this.http.get('https://ionicframework.com/docs/api/loading').subscribe(
      res => {
        console.log("Response 1 ", res);
      }
    );
    this.http.get('https://ionicframework.com/docs/api/loading').subscribe(
      res => {
        console.log("Response 2 ", res);
      }
    )
    this.http.get('https://ionicframework.com/docs/api/loading').subscribe(
      res => {
        console.log("Response 3 ", res);
      }
    )
    this.http.get('https://ionicframework.com/docs/api/loading').subscribe(
      res => {
        console.log("Response 4 ", res);
      }
    )
  }
}
