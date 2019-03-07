console.log("keep it up pal")

const audrey = document.getElementById("audrey")

// The learning objective for this exercise is to practice listening for the scroll event broadcast by the browser, and updating DOM elements in response.


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {

    audrey.style.width = window.scrollY/3 + 'px'
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    audrey.style.height = window.scrollY/4 + 'px'

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})