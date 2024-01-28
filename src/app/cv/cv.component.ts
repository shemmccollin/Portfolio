import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as awesome from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { cv } from '../data/data';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent implements OnInit {
  experiences:any = cv;
  hobby1: any;
  hobby2: any;
  hobby3: any;
  hobby4: any;
  


  ngOnInit(): void {
    this.hobby1 = awesome.faHiking;
    this.hobby2 = awesome.faSwimmer;
    this.hobby3 = awesome.faPlane;
    this.hobby4 = awesome.faTv;
  }
  
  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
}
