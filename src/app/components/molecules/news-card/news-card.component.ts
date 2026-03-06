import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateBadgeComponent } from '../../atoms/date-badge/date-badge.component';
import { ImageComponent } from '../../atoms/image/image.component';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, DateBadgeComponent, ImageComponent],
  template: `
    <article class="m-news-card flex h-full w-full flex-col gap-4">
      <div
        class="m-news-card__image-container h-[236.25px] w-full overflow-hidden rounded-lg xs:h-[236.25px] md:h-47.25 desktop:h-[277.13px]"
      >
        <app-image [containerClass]="'rounded-md'"></app-image>
      </div>

      <div class="m-news-card__content flex flex-col gap-4">
        <app-date-badge></app-date-badge>
        <div
          class="min-h-52.5 xs:min-h-52.5 md:min-h-59 desktop:min-h-59 flex flex-col justify-between gap-4"
        >
          <h3
            class="m-news-card__title line-clamp-2 text-[23px] leading-6.25 font-bold tracking-normal text-black xs:text-[23px] xs:leading-6.25 md:text-3xl md:leading-9.5 desktop:text-3xl desktop:leading-9.5"
          >
            {{ title }}
          </h3>
          <p
            class="m-news-card__description h-36 line-clamp-6 text-base leading-6 font-normal tracking-normal text-text-main"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </article>
  `,
  styles: [``],
})
export class NewsCardComponent {
  @Input() title: string =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.';
  @Input() description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Nullam aliquet mi vitae velit interdum...';
}
