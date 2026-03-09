import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../../molecules/news-card/news-card.component';
import { SearchInputComponent } from '../../atoms/search-input/search-input.component';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, SearchInputComponent],
  template: `
    <section
      aria-labelledby="news-section-title"
      class="o-news-section flex min-h-fit flex-row justify-center bg-white px-5 py-8 xs:min-h-587.5 xs:px-5 xs:py-8 md:min-h-315 md:px-8 md:py-12 desktop:min-h-[1532.25px] desktop:px-8 desktop:py-24"
    >
      <div class="w-full desktop:max-w-385.5 desktop:min-h-[1340.25px]">
        <header class="o-news-section__header mb-12 space-y-6">
          <h2
            id="news-section-title"
            class="o-news-section__title text-3xl leading-8 font-bold tracking-normal text-black xs:text-3xl xs:leading-8 md:text-5xl md:leading-14.5 desktop:text-5xl desktop:leading-14.5"
          >
            Lorem ipsum dolor sit
          </h2>
          <div class="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between desktop:flex-row desktop:items-center desktop:justify-between">
            <p
              class="o-news-section__subtitle font-inter text-lg leading-6.75 font-normal tracking-normal text-black xs:text-lg xs:leading-6.75 md:text-lg md:leading-6.75 desktop:text-lg desktop:leading-6.75"
            >
              Lorem ipsum dolor sit
            </p>
            <app-search-input></app-search-input>
          </div>
        </header>

        <ul
          aria-label="Listado de noticias"
          class="o-news-section__grid grid grid-cols-1 gap-8 xs:grid-cols-1 md:grid-cols-2 desktop:grid-cols-3"
        >
          @for (item of newsCards; track $index) {
            <li
              class="list-none"
              [ngClass]="item.visibility"
            >
              <app-news-card [title]="item.title"></app-news-card>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: [``],
})
export class NewsSectionComponent {
  protected readonly newsCards = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      visibility: 'hidden xs:hidden md:hidden desktop:block',
    },
    { title: 'Lorem ipsum dolor sit amet.', visibility: 'hidden md:block' },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      visibility: '',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      visibility: '',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      visibility: '',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      visibility: 'block xs:block md:hidden desktop:block',
    },
  ];
}
