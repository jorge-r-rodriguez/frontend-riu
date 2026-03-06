import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from '../../molecules/hero-card/hero-card.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [CommonModule, HeroCardComponent],
  template: `
    <header
      class="o-header-section bg-section-bg px-5 py-8 md:px-8 md:py-12 desktop:px-8 desktop:py-24"
    >
      <div class="w-full">
        <app-hero-card></app-hero-card>
      </div>
    </header>
  `,
  styles: [``],
})
export class HeaderSectionComponent {}
