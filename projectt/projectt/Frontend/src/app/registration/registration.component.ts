import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // tslint:disable-next-line:indent
	personName = '';
  // tslint:disable-next-line:indent
	email = '';
  // tslint:disable-next-line:indent
	phone = '';
  // tslint:disable-next-line:indent
	address = '';
  // tslint:disable-next-line:indent
	password = '';
  // tslint:disable-next-line:indent variable-name
	repeated_password = '';

  constructor(private apiService: ApiService,
              private appComponent: AppComponent,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   if (this.appComponent.logged) {
      this.router.navigateByUrl('account');
    }
  }

  // tslint:disable-next-line:typedef
  register() {
    if (this.personName && this.email && this.phone && this.address && this.password && (this.password === this.repeated_password)) {
      this.apiService.register(this.personName, this.email, this.phone, this.address, this.password).subscribe((data) => {
        if (!data) {
          alert('Please  email or password!');
        }
      });
      this.router.navigateByUrl('account');
    } else {
      alert('Error! Please check correctness of passwords. And be sure that all field are filled. After that try to register again');
    }
  }

}
