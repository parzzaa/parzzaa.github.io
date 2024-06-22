import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import WebApp from '@twa-dev/sdk'

document.addEventListener("DOMContentLoaded", function() {

    // Handle the main button click event
    WebApp.onEvent('mainButtonClicked', function() {
        WebApp.close();
    });

    // Customize the main button
    WebApp.MainButton.text = "Close";
    WebApp.MainButton.show();

    // Retrieve user data and display it
    const user = WebApp.initDataUnsafe.user;
    document.getElementById('user-info').innerText = `Hello, ${user.first_name}!`;
});

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
