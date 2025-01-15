import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class CvComponent {
  name: string = "Cyril Heiniger";
  email: string = "cyril.heiniger@bluewin.ch";

  jobs = [
    {
      function: 'Leader for Teams',
      role: 'Scrum Master / Team Coach',
      company: 'Swisscom AG',
      startDate: 'Oct 2023',
      endDate: 'Present',
      description: 'Technical and methodological leadership of a 22-member team in Network Infrastructure.'
    },
    {
      function: 'Servant Leader',
      role: 'Scrum Master',
      company: 'SBB AG',
      startDate: 'Aug 2022',
      endDate: 'Sep 2023',
      description: 'Built the Jira team from 3 to 7 members. Technical and methodological leadership of this team.'
    },
    {
      function: 'BizDevOps Engineer',
      role: 'DevOps Engineer',
      company: 'SBB AG',
      startDate: 'Aug 2020',
      endDate: 'Aug 2022',
      description: 'Responsible for the entire DevOps Lifecycle in Digital Services for DevTools.'
    }
  ];

  educationList = [
    {
      degree: 'Bachelor of Science in Digital Business & AI / Business Informatics',
      school: 'Berner Fachhochschule',
      startDate: 'Sep 2022',
      endDate: 'Aug 2026'
    },
    {
      degree: 'Computer Scientist Application Development EFZ',
      school: 'gibb',
      startDate: 'Aug 2016',
      endDate: 'Jul 2020'
    },
    {
      degree: 'Technical Professional Maturity',
      school: 'gibb',
      startDate: 'Aug 2016',
      endDate: 'Jul 2020'
    }
  ];

  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Golang', 'Leadership', 'Communication', 'IaaS'];

  languages = [
    {
      language: 'German',
      level: 'C2',
    },
    {
      language: 'English',
      level: 'C1',
    },
    {
      language: 'French',
      level: 'B2',
    },
    {
      language: 'Latin',
      level: 'A2',
    }];

  experienceOpen = false;
  educationOpen = false;
  skillsOpen = false;
  languagesOpen: boolean = false;

  toggleSection(section: string) {
    (this as any)[section] = !(this as any)[section];
  }
}
