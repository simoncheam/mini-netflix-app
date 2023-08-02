import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}


  goBack() {
    this.router.navigate(['/movie'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
