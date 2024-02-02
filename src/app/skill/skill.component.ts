import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFeature } from '../shared/state/portfolio.state';
import {  Store } from '@ngrx/store';
import { Skills, State } from '../types/types';


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
    this.store.select(PortfolioFeature.selectSkills).subscribe((skills) => {
      this.skills = skills;
    });
  }
  
}
