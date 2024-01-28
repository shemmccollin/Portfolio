import { Component, OnInit } from '@angular/core';
import * as awesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  contact: any;
  blog: any;
  portfolio: any;
  cv: any;
  skills: any;
  about: any;
  home: any;

  ngOnInit(): void {
    $('.js-scroll-trigger').on('click', function (): void {
      $('.navbar-collapse').toggle();
    });
    $('.nav').on('click', function (): void {
      $('.navbar-collapse').toggle();
    });

    this.home = awesome.faHome;
    this.about = awesome.faUser;
    this.skills = awesome.faSuitcase;
    this.cv = awesome.faFileAlt;
    this.portfolio = awesome.faBookOpen;
    this.blog = awesome.faBlog;
    this.contact = awesome.faEnvelope;
  }
}
