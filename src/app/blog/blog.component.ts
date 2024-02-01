import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioFeature } from '../shared/state/portfolio.state';
import { Store } from '@ngrx/store';
import { State } from '../types/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, OnDestroy {
  blogs:any;

  subscription: Subscription = new Subscription();

  constructor(private store: Store<State>){}

  ngOnInit(): void {
    this.subscription.add(
      this.store.select(PorfolioFeature.selectBlog).subscribe((blogs) => {
        this.blogs = blogs;
      })
    );
  }
   
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
