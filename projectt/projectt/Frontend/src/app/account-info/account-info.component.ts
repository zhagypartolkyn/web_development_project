import { Component, OnInit } from '@angular/core';
import { Account } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  loaded  = false;
  // tslint:disable-next-line:variable-name
  new_wish = '';

  account: Account = {
    // tslint:disable-next-line:indent
  	id: 1,
    // tslint:disable-next-line:indent
  	name: 'Madina',
    // tslint:disable-next-line:indent
  	email: 'madinagoll79@gmail.com',
    // tslint:disable-next-line:indent
  	phone: '+77051520025',
    // tslint:disable-next-line:indent
  	address: 'Qyzylorda city',
    // tslint:disable-next-line:indent
  	subscription: 32,
    // tslint:disable-next-line:indent
  	wishes: ['Milk']
  };

  wishes = this.account.wishes;

  constructor(private apiService: ApiService,
              private appComponent: AppComponent,
              private router: Router,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
      if (!this.appComponent.logged) {
        this.router.navigateByUrl('login');
      } else {
        this.getAccount();
      }
    }

  // tslint:disable-next-line:typedef
  getAccount() {
    this.apiService.getAccount().subscribe((data) => {
      if (data) {
        this.account = data;
        this.loaded = true;
      } else {
        this.appComponent.logged = false;
        localStorage.removeItem('');
      }
    });
    this.loaded = true;
  }

  // tslint:disable-next-line:typedef
  add_wish() {
    if (this.new_wish !== '') {
      this.account.wishes.push(this.new_wish);
      this.new_wish = '';
    }
  }

  // tslint:disable-next-line:typedef
  change_wish(index: number, event: any) {
    this.account.wishes[index] = event.target.value;
  }

  // tslint:disable-next-line:typedef
  delete_wish(index: number) {
    this.account.wishes.splice(index, 1);
    console.log(this.account.wishes);
  }

  // tslint:disable-next-line:typedef
  save_changes() {
    console.log(this.account.wishes);
    this.apiService.saveAccountChanges(this.wishes).subscribe((data) => {
      // tslint:disable-next-line:no-conditional-assignment
      if (data.message = 'Changes successfully saved') {
        this.getAccount();
      } else {
        this.appComponent.logged = false;
        localStorage.removeItem('token');
      }
    });
  }

}
