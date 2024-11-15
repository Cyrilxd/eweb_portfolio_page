import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
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
}
