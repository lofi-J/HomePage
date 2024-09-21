import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {css, Global} from "@emotion/react";
import App from './App.tsx';


const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
  
  
  // CSS Var
  :root {
    --background-color: rgb(24, 24, 24);
    --color: rgb(233, 233, 233);
    --header-background-color: #20202380;
    
    --gray-50: #F7FAFC;
    --gray-100: #EDF2F7;
    --gray-200: #E2E8F0;
    --gray-300: #CBD5E0;
    --gray-400: #A0AEC0;
    --gray-500: #718096;
    --gray-600: #4A5568;
    --gray-700: #2D3748;
    --gray-800: #1A202C;
    --gray-900: #171923;
    
    --orange: #FBD38D;
    --orange-100: #EEC886;
    --orange-200: #E2BE7F;
    --purple: #6B46C1;
    --purple-100: #6642B7;
    --purple-200: #603FAE;
    
    --max-header-height: 5rem;
    --max-width: 120rem;
    --backdrop: 1rem;
  }
  [data-theme='light'] {
    --background-color: rgb(237, 225, 210);
    --color: rgb(20, 24, 33);
    --header-background-color: #ffffff40;
  }
  
  // initial CSS
  html {
    font-size: 62.5%;
  }
  main, body {
    margin: 0;
    background-color: var(--background-color);
    color: var(--color);
  }
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.8rem;
    background: var(--header-background-color);
    max-height: var(--max-header-height);
  }
  main {
    margin-top: var(--max-header-height);
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: var(--color);
    text-decoration: unset;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Global styles={globalStyle} />
  </StrictMode>,
)
