import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { stickyNavBarAnimation, sidebarNavigation } from './_animations/index';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [ stickyNavBarAnimation, sidebarNavigation ]
})
export class AppComponent {
    stickyHeaderState: string = 'init';
    sidenavigationState: string = 'close';
    parentRouter = Router;

    toggleSideNav = function () {
        if (this.sidenavigationState == 'close') {
          this.sidenavigationState = 'open';
        } else {
          this.sidenavigationState = 'close';
        }
    }

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
      var currentScrolltop = $($event.currentTarget).scrollTop();

      if (currentScrolltop > 100 && currentScrolltop < 200) {
        this.stickyHeaderState = 'partial-scrolled';
      } else if (currentScrolltop >= 200) {
        this.stickyHeaderState = 'scrolled';
      } else {
        this.stickyHeaderState = 'init';
      }
    } 
}
