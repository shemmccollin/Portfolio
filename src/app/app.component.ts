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
import AOS from 'aos';

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
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
}
