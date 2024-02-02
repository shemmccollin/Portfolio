import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as awesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Store } from '@ngrx/store';
import { State } from '../types/types';
import {  Subscription } from 'rxjs';
import { PortfolioFeature } from '../shared/state/portfolio.state';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements OnInit, OnDestroy {
  education$: any = this.store.select(PortfolioFeature.selectEducation);
  work: any;
  hobby1: any;
  hobby2: any;
  hobby3: any;
  hobby4: any;

  subscription: Subscription = new Subscription();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(PortfolioFeature.selectWork).subscribe((work) => {
        this.work = cloneDeep(work);
      })
    );
    this.hobby1 = awesome.faHiking;
    this.hobby2 = awesome.faSwimmer;
    this.hobby3 = awesome.faPlane;
    this.hobby4 = awesome.faTv;
  }

  detailOnClick(experience: any) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
