import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  isNavbarActive = false;
  async ngOnInit() {}

  handleToggleActive() {
    console.log('handle toggle isNavbarActive');

    this.isNavbarActive = !this.isNavbarActive;
  }

  goBack() {
    this.router.navigate(['/movie'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
