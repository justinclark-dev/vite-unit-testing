# React + Vite + Unit Testing

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## To Set Up Vite for React with Unit Testing

**Run the following commands:**

```
npm create vite@latest

cd vite-unit-testing

npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

mkdir src/test

touch src/test/setup.js

touch src/App.test.jsx
```

<img width="1889" height="1574" alt="image" src="https://github.com/user-attachments/assets/d4e42314-4444-497e-a3d3-a1320d8a390d" />

**Edit the following files:**
package.json
<img width="334" height="538" alt="image" src="https://github.com/user-attachments/assets/6af5e417-27c6-465a-ac4f-6ac5b3d105fb" />

src/test/setup.js
<img width="708" height="269" alt="image" src="https://github.com/user-attachments/assets/a66b30b0-3fe1-4a3c-ba2e-6a0d23a17c26" />

vite.config.js
<img width="377" height="238" alt="image" src="https://github.com/user-attachments/assets/7c239b5f-7cd3-413c-ad66-105794ae8974" />

App.jsx
<img width="558" height="417" alt="image" src="https://github.com/user-attachments/assets/c544d7e2-d9da-4069-b2fa-7d0b3db5d38e" />

App.test.jsx
<img width="898" height="381" alt="image" src="https://github.com/user-attachments/assets/8ff5ed15-e2ed-47f2-95a3-aa9d52d60f6c" />

**Run the test:**

```
npm run test
```

<img width="1321" height="531" alt="image" src="https://github.com/user-attachments/assets/2fb6d6e2-ea78-479a-8e5b-b91286084b7f" />
