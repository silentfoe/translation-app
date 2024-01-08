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