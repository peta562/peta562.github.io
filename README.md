# Petr Lutsenko — Portfolio

A responsive English/Russian portfolio, made for GitHub Pages. Plain HTML, CSS and JavaScript, with no build step or dependencies.

## Preview locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## Publish on GitHub Pages

Use a public repository named `peta562.github.io`. Upload the files from this folder to the root of its `main` branch. In **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then save.

The intended URL is https://peta562.github.io/.

## Edit

- `index.html`: profile, game descriptions, skills and contact links.
- `style.css`: colors, typography and responsive layout.
- `script.js`: English/Russian translations, language switching and project category filters.
- `assets/`: official mobile game screenshots and icons downloaded from the Google Play listings linked on the page.

The portfolio uses a dark theme, formal copy in English and Russian, and game screenshots/covers. The web project covers are supplied by Petr.

Project cards describe the games rather than personal responsibilities. The About me section covers technical focus without employment history. Career facts in the profile are supplied by Petr.

## Languages

English is the default. The EN / RU switch translates the interface and project descriptions, updates the page title and accessibility labels, and remembers a selection in the browser. Direct links can use `?lang=en` or `?lang=ru`. An explicit URL language takes precedence over the saved preference.
