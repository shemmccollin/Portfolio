import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioActions } from './shared/state/portfolio.action';
import { Store } from '@ngrx/store';
import AOS from 'aos';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    FontAwesomeModule,
    AboutComponent,
    SkillComponent,
    CvComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    ToastModule
  ],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}
  ngOnInit(): void {
  
    this.store.dispatch(PortfolioActions.loadPortfolio());
    AOS.init();  
  }
}
