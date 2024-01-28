import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    var options = {
      strings: ['', 'Full-Stack', 'C#', 'Solutions Architect', 'Scrum Master'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true);
  }
}
