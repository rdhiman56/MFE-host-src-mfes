## MICROFRONTEND - REACT JS - TYPESCRIPT - HOST - SRC - MFE'S

## Project Structure

- `public/` — Contains the `index.html` template.
- `src/` — Application source code (`.tsx`, `.ts` files).
- `webpack.config.js` — Configuration for Webpack bundling and development server.
- `.babelrc` — Babel configuration using presets for TypeScript and React.
- `tsconfig.json` — TypeScript compiler options.
- `.gitignore` — Specifies ignored files/folders such as `node_modules/`.

## Notes

- This project uses Babel with `@babel/preset-typescript` to transpile TypeScript code.
- Webpack Dev Server runs on a specified port configured in `webpack.config.js` or the npm start script.

## Useful Commands

- `npm start` - Run the app in development mode.
- `npm run build` - Build the app for production.
- `git rm -r --cached node_modules` - Remove `node_modules` folder from Git tracking if needed.

---
