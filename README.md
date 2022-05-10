# Shopbridge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0,  
and responsive behavior is added with bootstrap version 4.3.2.
Admin Table is created by Angular material with Sorting listed products, Pagination and searching specific product.

Email id and password minimum of 6 character is required to login.
login email id is stored in browser session storage.
login page with route you to the admin page using Angular router. similarly after logining out, user will be logout to signin page. 

All the listed product data are fetch from "https://fakestoreapi.com/products"
Angular http CLient is used to fetch, add and update list.

Check the live page - **https://imthesk01.github.io/ShopBridge/**

## Development server on your local system

Run 'npm install' command to install all the dependenct.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
