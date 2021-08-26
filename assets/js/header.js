/**
 * Object definitions
 */
const hamburger = document.querySelector( ".hamburger" )
const navMenu = document.querySelector( ".nav-menu" )
const navLink = document.querySelectorAll( ".nav-link" )
const navBar = document.querySelector( "#header" )
var lastScroll = window.pageYOffset || document.documentElement.scrollTop

/**
 * Toggles de Hamburguer and Nav Menu
 */
const mobileMenu = () => {

    hamburger.classList.toggle( "active" )
    navMenu.classList.toggle( "active" )

}

/**
 * Closes the menu when a Link is clicked
 */
const closeMenu = () => {

    hamburger.classList.remove( "active" )
    navMenu.classList.remove( "active" )

}

/**
 * Hides and shows the navbar depending on scroll event
 */
const toggleNavbar = () => {

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if( currentScroll > lastScroll ) {
        //navBar.style.display='none'
        navBar.style.top='-100%'
        navMenu.classList.remove( "active" )
    } else {
        navBar.style.top='0'
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll

}

/**
 * Events
 */
hamburger.addEventListener( "click", mobileMenu )
navLink.forEach( n => n.addEventListener( "click", closeMenu ) )
window.addEventListener( 'scroll', toggleNavbar, false )