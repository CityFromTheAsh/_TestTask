# Task

https://agileengine.gitlab.io/interview/test-tasks/fevJhBJmQRwtfHLZ/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Intro
Imagine that you are involved in the development of a large file storage system. Special feature here is storing photos and images. We need to provide our users with the possibility to view stored images from a web interface.

## Requirements
We need to see your own code.
The app should load and display photos from our API endpoint http://interview.agileengine.com
Obtain a valid Bearer token with valid API key (don't forget to implement invalid token handler and renewal)
POST http://interview.agileengine.com/auth
Body: { "apiKey": "23567b218376f79d9415" }
Response: { "token": "ce09287c97bf310284be3c97619158cfed026004" }
The app should fetch paginated photo feed in JSON format with the following REST API call (GET):
GET /images
Headers: Authorization: Bearer ce09287c97bf310284be3c97619158cfed026004
Following pages can be retrieved by appending ‘page=N’ parameter:
GET /images?page=2
No redundant REST API calls should be triggered by the app.
The app should fetch more photo details (photographer name, better resolution) by the following REST API call (GET): GET /images/${id}
We value code readability and consistency, and usage of modern community best practices and architectural approaches, as well, as functionality correctness. So pay attention to code quality.
Target completion time is about 2 hours. We would rather see what you were able to do in 2 hours than a full-blown algorithm you’ve spent days implementing. Note that in addition to quality, time used is also factored into scoring the task.
## UI/UX Requirements
The app should contain two screens
Grid view:
Displays photos in a flexible grid, number of columns depending on the width of the viewport.
When a user clicks on a grid cell open up the Photo View.
(optional) Avoid image flickering on scroll.
Photo view:
Displays a fullscreen photo in a closable popup.
Shows author name, camera model and hashtags as an overlay.
Allows sharing a photo URL via a floating action button.
Support zooming and panning for images.
Supports navigating between images (left/right)
(optional) Animated screen transitions would be a plus.
Expected Deliverables
Source code.
Readme, with instructions, how to build and run.