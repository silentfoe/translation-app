// Import list of languages from languages.js
import listOfLanguages from "./languages.js"

// Load header
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data
    })

// Load footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data
    })

//must be loaded with initial header fetch to work
generateLanguageOptions()
renderLanguageWheelListItems()


// Add event listeners to document
document.addEventListener("click", function(event){
    // Toggle login form
    if (event.target.id === 'login-toggle'){
        // Toggle forms
        document.getElementById('login-form').style.display = 'grid'
        document.getElementById('signup-form').style.display = 'none'
        // Toggle button colors
        document.getElementById('login-toggle').classList.add('toggle-active')
        document.getElementById('signup-toggle').classList.remove('toggle-active')
    }

    // Toggle login form
    else if (event.target.id === 'signup-toggle'){
        // Toggle forms
        document.getElementById('signup-form').style.display = 'grid'
        document.getElementById('login-form').style.display = 'none'
        // Toggle button colors
        document.getElementById('signup-toggle').classList.add('toggle-active')
        document.getElementById('login-toggle').classList.remove('toggle-active')
    }
})

// ********** User setup **********
//creates all language options for language-wheel
function renderLanguageWheelListItems() {
    // Runs only if on User Setup page
    if (document.getElementById("language-wheel")){
        // Gets language list from languages.js imported at the top of the document
        const formattedLanguageList = listOfLanguages.map(currentLanguage => {
            return document.getElementById("language-wheel").innerHTML += 
                `<li class="language-card">
                    <img class="language-wheel-img" src="${currentLanguage.flag}">
                    <p>${currentLanguage.language}</p>
                </li>`
        })
    }
}

// ********** Site Language **********
//creates all language options for dropdown menu
function generateLanguageOptions() {
    // Runs only if on Site Language page
    if (document.getElementById("language-dropdown-menu")){
        // Gets language list from languages.js imported at the top of the document
        const formattedLanguageList = listOfLanguages.map(currentLanguage=> {
            return document.getElementById("language-dropdown-menu").innerHTML += 
                `<button id="${currentLanguage.language}-btn" class="dropdown-menu-option">${currentLanguage.language}</button>`
        })
    }
}