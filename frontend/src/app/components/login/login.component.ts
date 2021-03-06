import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  public form = {
    email: null,
    password: null,
  };
  public error = null;
  handleError(error: any) {
    this.error = error.errror;
  }
  onSubmit() {
    return this.http
      .post('http://localhost:8000/api/auth/login', this.form)
      .subscribe(
        (data) => console.log(data),
        (error) => this.handleError(error)
      );
  }
}
