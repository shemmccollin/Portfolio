import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as awesome from '@fortawesome/free-solid-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  linkedin: any;
  github: any;

  ngOnInit(): void {
    this.mapMarker = awesome.faMapMarker;
    this.building = awesome.faCity;
    this.email = awesome.faMailBulk;
    this.mobile = awesome.faMobile;
    this.birthday = awesome.faBirthdayCake;
    this.badge = awesome.faGraduationCap;
    this.home = awesome.faLaptopHouse;
    this.linkedin = brands.faLinkedinIn;
    this.github = brands.faGithubAlt;
  }
}
