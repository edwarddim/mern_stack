# What is Express.js?

Express is a fast, unopinionated, and minimalist web framework for Node.js.

## What is Node.js?

Node is a runtime environment for JavaScript. Prior to Node, JavaScript code was only able to run in the web browser. Now with Node, we have the ability to create server-side tools and applications by providing JS with an environment in which to run.

Most of the functionality that Express gives us is already possible with Node and the packages that come with Node "out of the box." Express just makes it much easier for us. Much, much easier!

### HTTP Verbs

- Post (Create, C in CRUD)
- Get (Read, R in CRUD )
- Put (Update, U in CRUD)
- Delete (Delete, D in CRUD)

### Designing an API from the Server Side!

**RESTful API**

- Resources exposed by endpoints

For example, in the SWAPI (Star Wars API), planets and people are resources that are exposed via endpoints (ie. /people/ -- get all the people resources /people/:id/ -- get a specific people resource)

We will be designing a RESTful API that exposes a superheroes resource at the following endpoints:
- GET all superheroes: api/superheroes
- POST create superhero: api/superheroes

- GET one superhero: api/superheroes/:id
- PUT update one superhero: api/superheroes/:id
- DELETE one superhero: api/superheroes/:id

The above is representative of a set of RESTful routes.

### With Express, we can:

  - Write handlers for requests with different HTTP verbs at different URL paths (routes).
  - Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
  - Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
  - Add additional request processing "middleware" at any point within the request handling pipeline.

Although Express is a minimalist framework, [there are many middleware packages](https://expressjs.com/en/resources/middleware.html) that address just about anything web development problem.

Today, we'll take a look at how easy it is to set up a web server thanks to Express.

- create a project directory
- cd into that directory
- npm init -y (creates a package.json)
- npm i express (installs express as a dependency)
- create a server.js
- require express in server.js (const express = require('express'))
- create app
- listen on a port