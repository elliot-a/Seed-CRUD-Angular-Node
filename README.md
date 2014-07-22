#### WORK IN PROGRESS, UNFINISHED - A sexy seed project for gulp, angular, browserify with a node backend (consisting of simple RESTful API and a mongoDB),

### Why this seed project :

* This seed project aims to include most of the common features of an angular application, front and backend, with as little boilerplate as possible.

* It uses a very neat implementation of browserify/angular

* The project uses the new Google Standards for angular app folder structure as specified [here](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

* By including common features it is hoped that you can just hit the ground running and copy and paste bits of code, and edit other bits to quickly edit the project into a custom angular application without any of the setup.



If you think I have missed anything out that is used frequently - let me know!!
Or if you have any changes or improvements please submit a pull request.



### This project stack :
*   AngularJS.
*   NodeJS.
*   Express.
*   MongoDB.
*   Gulp.
*   Browserify.
*   SCSS.
*   Bootstrap.


### Installation

Make sure you have mongoDB installed before proceeding. On a mac this will look something like this :
```
$ brew install mongodb
```



Then install global npm dependencies
```
$ npm install -g gulp
```

Then get npm dependencies for client and project
```
$ npm install
```

### Setup
Compile client project by running gulp
```
$ gulp
```

Then edit the app.js file in the 'app-server' folder to reflect the location of your client - this is marked in the 'settings' section
You can then run the node server
```
$ cd app-server
$ node app.js
```
Finally, in your browser, navigate to the 'dist' folder - this should display the application




#### Pull requests accepted :)
