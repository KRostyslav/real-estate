import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ResolveStart, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'fx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {

  title: string;

  constructor(private router: Router, private  route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof ResolveStart),
      map(event => {
        let data = null;
        let route = event['state'].root;

        while (route) {
          data = route.data || data;
          route = route.firstChild;
        }

        return data;
      }),
    ).subscribe((respone) => {
      this.title = respone.title;
    });
  }

}
