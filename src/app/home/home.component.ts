import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import Typed from 'typed.js';
import { Home, State } from '../types/types';
import { PorfolioFeature } from '../shared/state/portfolio.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private store: Store<State>) {}

  subscription: Subscription = new Subscription();
  home: Home | null | undefined;

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(PorfolioFeature.selectHome).subscribe((home) => {
        this.home = home;
        
        if (home?.headlines != null) {
          
          var options = {
            strings: this.home?.headlines ?? [''],
            typeSpeed: 120,
            backSpeed: 100,
            loop: true,
          };

          var typed = new Typed('.typed', options);
          typed.reset(true);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
