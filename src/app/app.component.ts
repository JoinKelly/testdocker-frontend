import {Component, Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent implements OnInit {
  name: string;
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.baseUrl + '/api/getdata/')
      .toPromise()
      .then((response) => {
        this.name = JSON.stringify(response);
      }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
