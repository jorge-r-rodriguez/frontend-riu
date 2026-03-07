import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="a-search relative w-full xs:w-full md:w-75 desktop:w-75">
      <img
        src="assets/image/search.svg"
        alt="Search Icon"
        class="a-search__icon pointer-events-none absolute inset-y-0 left-0 my-auto ml-4 h-4 w-4"
      />
      <input
        type="text"
        class="a-search__input h-10 w-full rounded-lg border-none bg-section-bg pl-12 pr-4 text-base text-text-main outline-none transition-all focus:ring-2 focus:ring-black/50"
        placeholder=" "
        aria-label="Buscar noticias"
      />
    </div>
  `,
  styles: [``],
})
export class SearchInputComponent {}
