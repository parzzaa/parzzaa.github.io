import './style.css'
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

// Retrieve user data and display it
const img = WebApp.initDataUnsafe.user;
document.getElementById('user-photo').innerHTML = img.photo_url;