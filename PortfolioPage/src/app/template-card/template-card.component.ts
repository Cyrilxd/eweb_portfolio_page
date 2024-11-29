import {Component, Input, input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-card',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './template-card.component.css',
  templateUrl: './template-card.component.html',
})
export class TemplateCardComponent {
  @Input() title: string | undefined;
  @Input() backgroundColor: string = '#fff'; // Anpassbare Hintergrundfarbe
}
