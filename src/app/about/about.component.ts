import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as awesome from '@fortawesome/free-solid-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { PorfolioFeature } from '../shared/state/portfolio.state';
import { Store } from '@ngrx/store';
import { About, State } from '../types/types';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, OnDestroy {
  mapMarker: any;
  building: any;
  mobile: any;
  email: any;
  birthday: any;
  badge: any;
  home: any;
  linkedin: any;
  github: any;
  about: About | null | undefined;
  subscription: Subscription = new Subscription();

  constructor(private store: Store<State>) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(PorfolioFeature.selectAbout).subscribe((about) => {
        this.about = about;
      })
    );

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
