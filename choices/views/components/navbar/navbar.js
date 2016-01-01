// This will be a react navbar class in React
// TODO: I think out db info should come here

var React = require('react')

class Navbar extend React.Component {
  constructor() {

  }
  // Create Component Here
  render(){
    return(
      // Something Goes in here
      nav.navbar.navbar-default.navbar-fixed-top
         .container
            .navbar-header
               button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#navbar', aria-expanded='false', aria-controls='navbar')
                  span.sr-only Toggle navigation
                  span.icon-bar
                  span.icon-bar
                  span.icon-bar
               a.navbar-brand(href='#') Project name
            #navbar.navbar-collapse.collapse
               ul.nav.navbar-nav
                  li.active
                     a(href='#') Home
                  li
                     a(href='#about') About
                  li
                     a(href='#contact') Contact
                  li.dropdown
                     a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-haspopup='true', aria-expanded='false')
                        | Dropdown
                        span.caret
                     ul.dropdown-menu
                        li
                           a(href='#') Action
                        li
                           a(href='#') Another action
                        li
                           a(href='#') Something else here
                        li.divider(role='separator')
                        li.dropdown-header Nav header
                        li
                           a(href='#') Separated link
                        li
                           a(href='#') One more separated link
               ul.nav.navbar-nav.navbar-right
                  li
                     a(href='../navbar/') Default
                  li
                     a(href='../navbar-static-top/') Static top
                  li.active
                     a(href='./')
                        | Fixed top
                        span.sr-only (current),

    );
  }
}
