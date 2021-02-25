import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirm: null,
  };
  public error = null;
  handleError(error: any) {
    this.error = error.errror;
  }

  ngOnInit(): void {}
  onSubmit() {
    return this.http
      .post('http://localhost:8000/api/auth/signup', this.form)
      .subscribe(
        (data) => console.log(data),
        (error) => this.handleError(error)
      );
  }
}
