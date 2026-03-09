# Frontend RIU

Maquetacion del challenge de RIU desarrollada con Angular y Tailwind CSS.

## Demo Online

https://jorge-r-rodriguez.github.io/frontend-riu/

Repositorio:

https://github.com/jorge-r-rodriguez/frontend-riu

## Stack

- Angular 21
- Tailwind CSS 4
- TypeScript

## Tecnicas y metodologias aplicadas

- Angular standalone
- Atomic Design
- BEM
- Mobile First
- Responsive design
- Design tokens con Tailwind
- HTML semantico
- Accesibilidad y teclado
- Assets estaticos
- Tipografias locales
- Deploy en GitHub Pages

## Detalle de implementacion

- Componentes standalone y composicion reutilizable en Angular
- Estructura `atoms`, `molecules` y `organisms`
- Convencion BEM en clases de componentes
- Enfoque mobile first para construir desde resoluciones pequenas hacia desktop
- Breakpoints y tokens centralizados en `src/styles.css`
- Uso de `@theme` en Tailwind para colores, fuentes, sombras y breakpoints
- Etiquetas semanticas como `main`, `section`, `header`, `article`, `ul` y `li`
- Mejora de foco visible, labels, `aria-labelledby` y skip link
- Assets estaticos servidos desde `public/`
- Tipografias locales cargadas con `@font-face`
- Publicacion en GitHub Pages usando `angular-cli-ghpages`

## Objetivo

Implementar la interfaz del challenge respetando la estructura visual del diseno, los breakpoints definidos y una base correcta de semantica, accesibilidad y navegacion por teclado.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm start
```

La aplicacion se sirve por defecto en:

```text
http://localhost:4200/
```

## Build

```bash
npm run build
```

La salida de produccion se genera en:

```text
dist/challenge-riu/browser
```

## Deploy

Build para GitHub Pages:

```bash
npm run build -- --configuration production --base-href "https://jorge-r-rodriguez.github.io/frontend-riu/"
```

Publicacion en `gh-pages`:

```bash
npx angular-cli-ghpages --branch gh-pages --dir="dist/challenge-riu/browser"
```

## Scripts disponibles

```bash
npm start
npm run build
npm run watch
npm test
```

## Estructura del proyecto

```text
src/
  index.html
  main.ts
  styles.css
  app/
    app.config.ts
    app.html
    app.routes.ts
    app.scss
    app.spec.ts
    app.ts
    components/
      atoms/
        button/
          button.component.ts
        date-badge/
          date-badge.component.ts
        image/
          image.component.ts
        search-input/
          search-input.component.ts
      molecules/
        gallery-card/
          gallery-card.component.ts
        hero-card/
          hero-card.component.ts
        news-card/
          news-card.component.ts
      organisms/
        gallery-section/
          gallery-section.component.ts
        header-section/
          header-section.component.ts
        news-section/
          news-section.component.ts
public/
  favicon.ico
  assets/
    fonts/
      fig-tree/
      inter/
    image/
      calendar.svg
      download.svg
      image.png
      search.svg
```

## Notas

- Los assets estaticos se sirven desde `public/`.
- Las tipografias locales se cargan desde `public/assets/fonts`.
- GitHub Pages publica desde la rama `gh-pages`.
- La prueba esta enfocada en maquetacion y presentacion visual.
- No se implementa logica de negocio ni gestion avanzada de estado.
- Los elementos de navegacion incluidos actuan como placeholder para la demo.
