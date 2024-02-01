import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioFeature } from '../shared/state/portfolio.state';
import { Store } from '@ngrx/store';
import { State } from '../types/types';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit, OnDestroy {
  projects: any;
  subscription: Subscription = new Subscription();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.subscription.add(
      this.store
        .select(PorfolioFeature.selectPortfolio)
        .subscribe((portfolio) => {
          this.projects = cloneDeep(portfolio);
        })
    );
  }
  detailOnClick(project: any) {
    this.projects
      .filter((item: any) => item.detailIsDisplayed && item.id != project.id)
      .map((elem: any) => (elem.detailIsDisplayed = false));
    project.detailIsDisplayed = !project.detailIsDisplayed;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
