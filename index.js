// Load header
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data
        //must be loaded with initial header fetch to work
        generateLanguageOptions()
    })

// Load footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data
    })


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

//creates all language options for dropdown menu
function generateLanguageOptions() {
    //can be replaced later with an API as project scales 
    const listOfLanguages = ["English", "Mandarin", "Hindi", "Spanish", "French", "Arabic", "Bengali", "Russian",
    "Portuguese", "Urdu", "Indonesian", "German", "Japanese", "Nigerian", "Turkish", "Tamil"]

    const formattedLanguageList = listOfLanguages.map(current=> {
        return document.getElementById("language-dropdown-menu").innerHTML += 
            `<button id="${current}-btn" class="dropdown-menu-option">${current}</button>`
    })
}