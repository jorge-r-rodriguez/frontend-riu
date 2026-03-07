import { Component } from '@angular/core';
import { HeaderSectionComponent } from "./components/organisms/header-section/header-section.component";
import { NewsSectionComponent } from "./components/organisms/news-section/news-section.component";
import { GallerySectionComponent } from "./components/organisms/gallery-section/gallery-section.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [HeaderSectionComponent, NewsSectionComponent, GallerySectionComponent]
})
export class App {}
