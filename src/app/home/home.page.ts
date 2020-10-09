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
    this.http.get('url here').subscribe(
      res => {
        console.log(res)
      }
    );
    this.http.get('url 1 here').subscribe(
      res => {
        console.log(res)
      }
    )
    this.http.get('url 2 here').subscribe(
      res => {
        console.log(res)
      }
    )
    this.http.get('url 3 here').subscribe(
      res => {
        console.log(res)
      }
    )
  }
}
