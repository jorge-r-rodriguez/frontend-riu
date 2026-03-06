import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="a-date-badge flex gap-2">
      <img src="image/calendar.svg" alt="Calendar Icon" class="a-date-badge__icon size-6" />
      <span class="a-date-badge__text inline-block text-base leading-6 font-bold tracking-normal text-text-main">{{ dateText }}</span>
    </div>
  `,
  styles: [`
    /* BEM Block: a-date-badge */
  `]
})
export class DateBadgeComponent {
  @Input() dateText: string = 'Lorem ipsum dolor sit amet.';
}
