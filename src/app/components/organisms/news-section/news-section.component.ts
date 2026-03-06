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
      class="o-news-section flex flex-row justify-center bg-white px-5 py-8 xs:px-5 xs:py-8 md:px-8 md:py-12 desktop:px-8 desktop:py-24"
    >
      <div class="w-full desktop:max-w-385.5">
        <div class="o-news-section__header mb-12 space-y-6">
          <div class="o-news-section__titles">
            <h2
              class="o-news-section__title text-3xl leading-8 font-bold tracking-normal text-black md:text-5xl md:leading-14.5 desktop:text-5xl desktop:leading-14.5"
            >
              Lorem ipsum dolor sit
            </h2>
          </div>
          <div
            class="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between desktop:flex-row desktop:items-center desktop:justify-between"
          >
            <p
              class="o-news-section__subtitle font-inter text-lg leading-6.75 font-normal tracking-normal text-black"
            >
              Lorem ipsum dolor sit
            </p>
            <app-search-input></app-search-input>
          </div>
        </div>

        <div
          class="o-news-section__grid grid grid-cols-1 gap-8 xs:grid-cols-1 md:grid-cols-2 desktop:grid-cols-3"
        >
          <div
            *ngFor="let item of newsCards"
            class="list-none"
            [ngClass]="item.visibility"
          >
            <app-news-card [title]="item.title"></app-news-card>
          </div>
        </div>
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
