import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="a-button flex h-10 w-30.5 items-center justify-center gap-2.5 rounded-lg bg-brand-btn px-2 py-2 font-inter text-base leading-6 font-bold text-white transition-all hover:cursor-pointer hover:brightness-110"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .a-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class ButtonComponent {}
