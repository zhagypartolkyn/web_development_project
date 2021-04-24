import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { AppComponent } from '../app.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  // tslint:disable-next-line:indent
	email = '';
  // tslint:disable-next-line:indent
	password = '';
  // tslint:disable-next-line:indent
	returnPage = 'account';

  // tslint:disable-next-line:indent
	constructor(private apiService: ApiService,
             private appComponent: AppComponent,
             private router: Router,
             private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef indent
	ngOnInit() {
    // tslint:disable-next-line:indent
	    // Get the query params
    // tslint:disable-next-line:indent
	    if (this.appComponent.logged) {
        // tslint:disable-next-line:indent
	      this.router.navigateByUrl(this.returnPage);
        // tslint:disable-next-line:indent
	    }
    // tslint:disable-next-line:indent
	}

  // tslint:disable-next-line:indent
	login(): void {
    // tslint:disable-next-line:indent
    console.log(this.email, this.password);
    this.apiService.login(this.email, this.password).subscribe((data) => {
      if (!data.token) {
        alert('Invalid email or password!');
      }else{
        console.log(data.token);
        localStorage.setItem('token', data.token);
      }
    });
    // tslint:disable-next-line:indent
	}
}
