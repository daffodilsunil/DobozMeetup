import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { UserModel } from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css', './app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  users: UserModel[];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.refreshList();
  }

  onSubmit(heroForm: NgForm) {
    let options = new RequestOptions();
    options.headers = new Headers({ 'Content-Type': 'application/json' });
    let data = heroForm.value;
    this.http.post("/api/values", data, options).subscribe(() =>
      this.refreshList()
    );
  }

  refreshList() {
    this.http.get('api/values').subscribe(response => this.users = response.json());
  }

  deleteItem(index) {
    this.http.delete('api/values/' + index).subscribe(() =>
      this.refreshList());
  }
}
