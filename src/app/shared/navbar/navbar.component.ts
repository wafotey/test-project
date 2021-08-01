import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit { 

  currentRoute = '';
  @Output() menuItemClicked = new EventEmitter<boolean>()

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private translate: TranslateService) {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
    ).subscribe((event) => {
      const path = this.router.url.split('?')[0];
      const paramtersLen = Object.keys(event.snapshot.params).length;
      const pathArr = path.split('/').slice(0, path.split('/').length - paramtersLen);
      this.currentRoute = pathArr[pathArr.length - 1];
    });
  }

  menuClicked(){
     this.menuItemClicked.emit(true);
  }

  ngOnInit() {
  }

}
