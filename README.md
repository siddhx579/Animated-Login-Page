# Animated-Login-Page
 This repository contains the code for an animated login page. The page is built using HTML, CSS, and JavaScript. The CSS is used to create the animations, and the JavaScript is used to toggle between the sign-in and sign-up forms.

 ## Prerequisites

 To run this code, you will need the following:

* A text editor
* A web browser
* A basic understanding of HTML, CSS, and JavaScript

## Features

* Responsive design
* Modern and clean design
* Easy to customize
* Social icons
* Toggle between sign up and sign in forms

## Instructions

To use this code, follow these steps:

1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Click on the "Sign In" or "Sign Up" button to toggle between the two forms.

## JavaScript Code

The JavaScript code uses the `classList` property of the container element to add or remove the "active" class. When the register button is clicked, the "active" class is added to the container element, which displays the registration form. When the login button is clicked, the "active" class is removed from the container element, which displays the login form.

## Step-by-Step Explanation

1. The `container` variable is assigned the HTML element with the id of "container".
2. The `registerBtn` variable is assigned the HTML element with the id of "register".
3. The `loginBtn` variable is assigned the HTML element with the id of "login".
4. An event listener is added to the `registerBtn` element. When the register button is clicked, the `classList.add("active")` method is called on the `container` element. This adds the "active" class to the container element, which displays the registration form.
5. An event listener is added to the `loginBtn` element. When the login button is clicked, the `classList.remove("active")` method is called on the `container` element. This removes the "active" class from the container element, which displays the login form.

## Code Overview

The code for this project is relatively simple. The HTML file contains the markup for the page, the CSS file contains the styles for the page, and the JavaScript file contains the code to toggle between the two forms.