import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorfolioFeature } from '../shared/state/portfolio.state';
import {  Store } from '@ngrx/store';
import { About, Skills, State } from '../types/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent implements OnInit {
  constructor(private store: Store<State>){}

  skills: Skills | null | undefined;
  
  ngOnInit(): void {
    this.store.select(PorfolioFeature.selectSkills).subscribe((skills) => {
      this.skills = skills;
    });
  }
  
}
