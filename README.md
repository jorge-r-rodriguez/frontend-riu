# Frontend RIU

Maquetacion del challenge de RIU desarrollada con Angular y Tailwind CSS.

## Demo

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
  app/
    components/
      atoms/
      molecules/
      organisms/
```

## Notas

- Los assets estaticos se sirven desde `public/`.
- Las tipografias locales se cargan desde `public/assets/fonts`.
- GitHub Pages publica desde la rama `gh-pages`.
