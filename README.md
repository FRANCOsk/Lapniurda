# Lapniurda

Lapniurda is an Angular recipe website focused on Balkan cuisine. The application contains navigation, featured recipe content and social-media contact links.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200` in a browser.

## Quality checks

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build -- --configuration production
npm audit --audit-level=high
```

## Repository structure

- `src/app` – Angular components and application logic
- `src/assets` – images and Bootstrap icon assets
- `.github/workflows` – continuous integration configuration

## Security

Do not commit credentials, API keys or environment-specific secrets. Dependency changes should be validated by unit tests, a production build and `npm audit` before merging.
