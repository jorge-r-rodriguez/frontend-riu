import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../atoms/image/image.component';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  template: `
    <article
      class="m-gallery-card relative overflow-hidden rounded-lg w-71 xs:w-71 md:w-90 desktop:w-[361.5px] h-94.5 xs:h-94.5 md:h-120 desktop:h-120.5"
    >
      <app-image [containerClass]="'rounded-lg'">
        <div
          class="m-gallery-card__overlay absolute bottom-0 left-0 flex h-43.75 w-full flex-col justify-between bg-gradient-card p-4"
        >
          <header class="flex flex-col gap-2">
            <h4
              class="m-gallery-card__title text-3xl leading-9.5 font-bold tracking-normal text-white"
            >
              {{ title }}
            </h4>
            <p
              class="m-gallery-card__description text-base leading-6 font-normal tracking-normal text-white"
            >
              {{ description }}
            </p>
          </header>
          <button
            type="button"
            class="m-gallery-card__link flex flex-row items-center gap-1 text-white"
          >
            <span
              class="inline-block text-base leading-6 font-bold tracking-normal"
              >Lorem ipsum</span
            >
            <img
              src="assets/image/download.svg"
              alt=""
              aria-hidden="true"
              class="size-6"
            />
          </button>
        </div>
      </app-image>
    </article>
  `,
  styles: [``],
})
export class GalleryCardComponent {
  @Input() title: string = 'Lorem ipsum';
  @Input() description: string = 'Lorem ipsum dolor sit amet consectetur.';
}
