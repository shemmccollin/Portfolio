import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  skills: any = {
    technologies: [
      {
        name: 'C#, .NET Core, ASP.NET MVC',
        percent: 90,
        remark: 'excellent',
      },
      {
        name: 'Java, Spring Boot, Angular',
        percent: 90,
        remark: 'excellent',
      },

      {
        name: 'JavaScript, BootStrap, React, HTML5, CSS3',
        percent: 90,
        remark: 'excellent',
      },
      { name: 'C++, C', percent: 70, remark: 'good' },
    ],
    tools: [
      {
        name: 'Git, Postman, Visual Studio, VS Code',
        percent: 90,
        remark: 'excellent',
      },
      {
        name: 'IntelliJ, Kafka, TFS, PowerShell',
        percent: 90,
        remark: 'excellent',
      },
      { name: 'MySql, MongoDB, Ms SQL', percent: 90, remark: 'excellent' },
      {
        name: 'Docker, Kubernetes, Azure Dev Ops',
        percent: 50,
        remark: 'average',
      },
    ],
    methodologies: [
      { name: 'Scrum', percent: 90, remark: 'excellent' },
      { name: 'Database Design', percent: 90, remark: 'excellent' },
      { name: 'Cloud Computing', percent: 90, remark: 'excellent' },
      { name: 'Test-Driven Development', percent: 70, remark: 'good' },
    ],
  };
}
