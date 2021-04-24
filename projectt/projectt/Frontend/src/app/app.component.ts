import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  logged = false;
  constructor(private router: Router,
              private route: ActivatedRoute) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.logged = false;
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }
}
