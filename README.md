# bc-22-Tv-series-Tracker
A simple app to track your favorite tv shows

## Introduction
*  **`Tv Series Tracker`** is a Mean stack Powered App that helps you search for and keep track of your favorite shows.
*  It has the following features;
  *  Local Authentication
  *  Searching for shows
  *  Saving your favorite shows
  *  Allows users to share their favorite shows via a url

## Dependencies

### Back End Dependencies
*  This app's functionality depends on multiple Node packages including;
  *  **[Node](https://nodejs.org/)** - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
  *  **[express](https://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  *  **[passport](http://passportjs.org/)** - Passport is authentication middleware for Node.js.
  *  **[mongoose](http://mongoosejs.com/)** - elegant mongodb object modeling for node.js
  
## Front End Dependencies
*  **[Bower](https://bower.io/)** - Package manager for frontend technologies
*  **[Angular JS](https://angularjs.org/)** - This framework facilitates the dynamic aspects of this app. It enables the application of the Single Page Application philosophy and also has mechanisms to make calls to the api to update the view with recent data.
  *  Angular Sanitizer - This is an Angular component that is particularly useful when making calls to an external route.
*  **[Jquery](https://jquery.com/)** - frontend javascript library
*  **[Bootstrap](http://getbootstrap.com/)** - Mobile first css library.
*  **[Font Awesome](https://fortawesome.github.io/Font-Awesome/)** - Iconic font and css toolkit.

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone this repository on that directory.
  *  Using SSH;

    >`git clone git@github.com:seyi-adeleke/bc-22-Tv-series-Tracker.git`

  *  Using HTTPS;

    >`https://github.com/seyi-adeleke/bc-22-Tv-series-Tracker.git`

*  Navigate to the repo's folder on your computer
  *  `cd bc-22-Tv-series-Tracker/`
*  Install the app's backend dependencies.
  *  `node install`
*  Install the app's front end dependencies using bower.
  *  `bower install`

    >In order to use bower, you need to install it through **npm**. You also need to have **node** and **git** installed on your system.
* Run the app
  *  `node index.js`
 

## Tests
*  The tests have been written using Jasmine.
*  Issue the following command on terminal.
  *  `npm test`
*  If the tests are successful, they will complete without failures or errors.

  ```
  .........
  ----------------------------------------------------------------------
  Ran 6 tests in 1.064s

  OK
  ```

