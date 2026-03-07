import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCardComponent } from '../../molecules/gallery-card/gallery-card.component';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [CommonModule, GalleryCardComponent],
  template: `
    <section
      class="o-gallery-section flex flex-row justify-center bg-white px-5 py-8 xs:px-5 xs:py-8 md:px-8 md:py-12 desktop:px-8 desktop:py-24"
    >
      <div class="w-full max-w-385.5 flex flex-col gap-12">
        <header class="o-gallery-section__header w-full space-y-6">
          <h2
            class="o-gallery-section__title text-3xl leading-8 font-bold tracking-normal text-black xs:text-3xl xs:leading-8 md:text-5xl md:leading-14.5 desktop:text-5xl desktop:leading-14.5"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
          </h2>
          <p
            class="o-gallery-section__description text-base leading-6 font-normal tracking-normal text-black"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo
            lacus at sodales sodales. Quisque sagittis orci ut diam condimentum,
            vel euismod erat placerat, in iaculis arcu eros, eget tempus orci
            facilisis id.
          </p>
        </header>

        <div class="o-gallery-section__slider w-full overflow-hidden">
          <ul class="flex w-full gap-8 overflow-x-auto snap-x snap-mandatory">
            <li
              *ngFor="let item of galleryCards"
              class="shrink-0 snap-start list-none"
            >
              <app-gallery-card></app-gallery-card>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [``],
})
export class GallerySectionComponent {
  protected readonly galleryCards = [1, 2, 3, 4];
}
