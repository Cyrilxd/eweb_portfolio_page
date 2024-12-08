import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

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
  phone: string = "not public";

  jobs = [
    {
      function: 'Leader for Teams',
      role: 'Scrum Master / Team Coach',
      company: 'Swisscom AG AG',
      startDate: 'Okt 2023',
      endDate: 'Present',
      description: 'Fachliche & methodische Führung von einem 22 köpfigen Team in Network Infrastructure'
    },
    {
      function: 'Servant Leader',
      role: 'Scrum Master',
      company: 'SBB AG',
      startDate: 'Aug 2022',
      endDate: 'Sep 2023',
      description: 'Aufbau vom Jira Team von 3 auf 7 MAs. Fachliche & methodische Führung von diesem Team'
    },
    {
      function: 'BizDevOps Engineer',
      role: 'DevOps Engineer',
      company: 'SBB AG',
      startDate: 'Aug 2020',
      endDate: 'Aug 2022',
      description: 'Responsible for the whole DevOps LifeCycle in Digital Services for DevTools.'
    }
  ];
  educationList = [
    {
      degree: 'Bachelor of Science in Digital Business & Ai / Wirtschaftsinformatik',
      school: 'Berner Fachhochschule',
      startDate: 'Sep 2022',
      endDate: 'Aug 2026'
    },
    {
      degree: 'Informatiker Applikations Entwicklung EFZ',
      school: 'gibb',
      startDate: 'Aug 2016',
      endDate: 'Jul 2020'
    },
    {
      degree: 'Technische Berufsmaturität',
      school: 'gibb',
      startDate: 'Aug 2016',
      endDate: 'Jul 2020'
    }
  ];

  skills: string[] = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];

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
