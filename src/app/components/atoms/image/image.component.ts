import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="a-image relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-img-placeholder font-figtree font-bold tracking-normal text-text-over-img"
      [ngClass]="containerClass"
    >
      @if (!src) {
        <span
          aria-hidden="true"
          class="a-image__placeholder absolute z-10 text-text-img-placeholder uppercase leading-none"
          >IMAGE</span
        >
      }
      @if (src) {
        <img
          [src]="src"
          [attr.srcset]="srcset || null"
          [attr.sizes]="sizes || null"
          [attr.fetchpriority]="fetchPriority"
          [alt]="alt"
          class="a-image__img relative z-20 h-full w-full object-cover"
          [loading]="loading"
          decoding="async"
        />
      }
      <div
        class="a-image__overlay pointer-events-none absolute inset-0 z-30 flex h-full w-full flex-col justify-end"
      >
        <div class="pointer-events-auto w-full">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class ImageComponent {
  @Input() src: string = 'assets/image/image.png';
  @Input() srcset: string = '';
  @Input() sizes: string = '';
  @Input() alt: string = 'Imagen del contenido';
  @Input() containerClass: string = '';
  @Input() loading: 'lazy' | 'eager' = 'lazy';
  @Input() fetchPriority: 'high' | 'low' | 'auto' = 'auto';
}
