# BaseApp

This repository contains a basic App with multiple features, which 
are typically needed in most WebApps.

It provides both a express back-end with Mongo as a document-based database
as well as Rust with GraphQl.

Just clone or add as submodule with either:

```bash
git submodule add https://github.com/jmpargana/BaseApp.git
```

```bash
git clone https://github.com/jmpargana/BaseApp.git
```

And create an .env file containing all the needed variables and API keys.


## Features

### Auth0

It implements the [Auth0](https://auth0.com/) library to login, with multiple
social media accounts and provides essential safety features like two-step 
authentication, password recovery, etc.


### Google Map React

The Google Maps API is needed in a vast majority of web applications, and this
skeleton contains a prepared connection.

There are multiple react libraries available, but I chose [this](https://github.com/google-map-react/google-map-react) 
since it provides very well documented guides.


### Context API

The Context API is an important design principle for react Apps. It provides the
developer with an easy to maintain global state.

Read more [here](https://reactjs.org/docs/context.html).


### Internationalization

It comes with a fully implemented i18n library that allows easy translations throughout the application.

Read more about how to use and setup each component with either HOC, Hooks
or Legacy components [here](https://www.i18next.com/).

### Materialize

It renders all the components with the materialize library styling, which can
be changed with "styled-components" or plain CSS, but is a huge help, since
its an amazing library following the material design guidelines.

You can find more examples [here](https://materializecss.com/).


### Multer

It provides already written functions to easily upload files and perform all
the CRUD requests to the database.



