import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateBadgeComponent } from '../../atoms/date-badge/date-badge.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ImageComponent } from '../../atoms/image/image.component';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule, DateBadgeComponent, ButtonComponent, ImageComponent],
  template: `
    <article
      class="m-hero-card mx-auto flex max-w-385.5 flex-col gap-8 rounded-lg bg-white p-8 shadow-card min-h-fit xs:min-h-[832.25px] min-[480px]:min-h-fit md:min-h-198 min-[818px]:min-h-fit desktop:min-h-120 md:flex-col desktop:flex-row"
    >
      <div
        class="m-hero-card__image-container h-[200.25px] w-full overflow-hidden rounded-lg md:h-90 desktop:h-104"
      >
        <app-image
          [containerClass]="'rounded-md'"
          [loading]="'eager'"
          [fetchPriority]="'high'"
        ></app-image>
      </div>

      <div
        class="m-hero-card__content h-full w-full flex flex-col gap-4 desktop:gap-6"
      >
        <div class="m-hero-card__top flex flex-col gap-4">
          <app-date-badge></app-date-badge>
          <h1
            class="m-hero-card__title text-2xl leading-7 font-bold tracking-normal text-text-main"
          >
            {{ title }}
          </h1>
          <p
            class="m-hero-card__description text-base leading-6 font-normal tracking-normal text-text-main"
          >
            {{ description }}
            <span class="hidden desktop:inline-block">{{ desktopDescription }}</span>
          </p>
        </div>

        <div class="m-hero-card__actions mt-auto flex justify-end">
          <app-button>Lorem ipsum.</app-button>
        </div>
      </div>
    </article>
  `,
  styles: [``],
})
export class HeroCardComponent {
  @Input() title: string =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit';
  @Input() description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';
  @Input() desktopDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.';
}
