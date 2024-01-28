import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { blogs } from '../data/blog';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs:any[]= blogs;
}
