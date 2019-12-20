# cars

This is a Fullstack Java ReactJS Application built on JHispter Stack
with JUnit and JEST Unit Testing and Swagger API Documentation.

# Prerequisites
PC

Tested with :

JDK 11

Maven 3.6.3

Windows 10 X64

Setup

Install Java JDK 11

Setup JavaHome Path

Setup Apache Maven 3.6.3

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    npm install

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    npm start

## Testing

To launch your application's tests, run:

    ./mvnw verify

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test

