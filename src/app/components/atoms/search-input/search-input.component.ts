import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form role="search" class="a-search relative w-full xs:w-full md:w-75 desktop:w-75">
      <label for="search-input" class="sr-only">Search Content</label>
      <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <img
          src="assets/image/search.svg"
          alt=""
          aria-hidden="true"
          class="a-search__icon size-4"
        />
      </div>
      <input
        type="search"
        id="search-input"
        class="a-search__input h-10 w-full rounded-lg border-none bg-section-bg pl-12 pr-4 text-base text-text-main outline-none transition-all focus:ring-2 focus:ring-black/50"
        placeholder=" "
        aria-label="Buscar noticias"
      />
    </form>
  `,
  styles: [``],
})
export class SearchInputComponent {}
