import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  plans = [25000, 50000, 75000, 150000, 300000];
  methods = ['Visa/Mastercard', 'Qiwi'];
  paymentAmount!: number;
  paymentPlan = 2;
  paymentMethod = 1;

  constructor(private apiService: ApiService,
              private appComponent: AppComponent,
              private router: Router,
              private route: ActivatedRoute) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
      if (!this.appComponent.logged) {
        this.router.navigateByUrl('login');
      } else {
        this.paymentAmount = this.plans[this.paymentPlan - 1];
      }
    }

  // tslint:disable-next-line:typedef
  onPaymentPlanChange(event: any){
    // tslint:disable-next-line:indent
  	this.paymentPlan = event.target.value;
    // tslint:disable-next-line:indent
  	this.paymentAmount = this.plans[this.paymentPlan - 1];
  }

  // tslint:disable-next-line:typedef
  onPaymentMethodChange(event: any){
    // tslint:disable-next-line:indent
  	this.paymentMethod = event.target.value;
  }

  // tslint:disable-next-line:typedef
  paymentProcess() {
    // tslint:disable-next-line:indent
  	this.apiService.extendSubscription(this.plans[this.paymentPlan], this.methods[this.paymentMethod]).subscribe((data) => {
      if (data.message === 'Successful payment') {
        this.router.navigateByUrl('account');
      } else {
        alert('Something went wrong! Please try again or connect with tech support!');
      }
    });
  }
}
