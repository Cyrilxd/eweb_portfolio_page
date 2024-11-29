import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  name: string = "Cyril Heiniger";
  email: string = "cyril.heiniger@bluewin.ch";
  phone: string = "not public";

  lifts = [
    {
      name: 'Deadlift',
      max: 280,
    },
    {
      name: 'Bench Press',
      max: 160,
    },
    {
      name: 'Squat',
      max: 'Skipped'
    },
    ]

  sportOpen = false;

  toggleSection(section: string) {
    (this as any)[section] = !(this as any)[section];
  }
}
