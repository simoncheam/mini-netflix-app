import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChildren('toggleButton', { read: ElementRef }) navToggle: QueryList<any>;
  constructor(private router: Router, private route: ActivatedRoute) {}
  isNavbarActive = false;
  async ngOnInit() {
    // await this.handleToggleActive();
  }

  handleToggleActive() {
    console.log('handle toggle isNavbarActive');

    this.isNavbarActive = !this.isNavbarActive;

    // const toggleButtonEl = this.navToggle?.first?.nativeElement;
    // console.log(toggleButtonEl);

    // const toggleButton = document.getElementsByClassName('toggle-button')[0];

    // const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    // toggleButton.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   navbarLinks.classList.toggle('active');
    //   if (!this.isNavbarActive) {
    //   }

    //   this.isNavbarActive = true;
    // });
    // setTimeout(() => {
    //   if (this.isNavbarActive) {
    //     this.isNavbarActive = false;
    //   }
    // }, 3000);
  }

  goBack() {
    this.router.navigate(['/movie'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
