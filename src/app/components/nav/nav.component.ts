import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit { navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [

      {
        label: 'Home',
        link: 'home',
        index: 0,
      },
      {
        label: 'Operario',
        link: 'listOperario',
        index: 1,
      },
      {
        label: 'Turno',
        link: 'listTurno',
        index: 2,
      },
      {
        label: 'Jornada',
        link: 'listJornada',
        index: 3,
      },
      {
        label: 'Cuadrante',
        link: 'listCuadrante',
        index: 4,
      },
      {
        label: 'Login',
        link: 'login',
        index: 5,
      }
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
