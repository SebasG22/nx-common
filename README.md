# Nx Common

This project is created to enable common features easily across multiple projects that using angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

<a href="https://nrwl.io/nx"><img src="https://preview.ibb.co/mW6sdw/nx_logo.png" style="width:200px;"></a>

Nx is an open source toolkit for enterprise Angular applications.

In order to maintain a certain sense of
order, The project use the following standard based on the Enterprise Angular Monorepo patterns recommendation:

- **Feature libraries**: Developers should consider feature libraries as libraries that implement
smart UI (with injected services) for specific business use cases or pages in an application.
- **UI libraries**: A UI library contains only presentational components.
- **Data-access libraries**: A data-access library contains services and utilities for interacting with a
back-end system. It also includes all the code related to State management.
- **Utility libraries**: A utility library contains common utilities and services used by many
14
libraries and applications.



## Development server

Run `ng serve --project=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name --project=myapp` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --project=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).
Before running the tests make sure you are serving the app via `ng serve`.


