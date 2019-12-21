# cars

This is a Fullstack Java ReactJS Application built on JHispter Stack
with JUnit and JEST Unit Testing and Swagger API Documentation.
Build Instructions will be followed by Screenshots and Walkthrough.

## Prerequisites
PC

### Tested with :

JDK 11

Maven 3.6.3

Windows 10 X64

Apache

MySQL 5.7

### Setup

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

To launch your application's tests, run: (these server side tests are located cargallery/src/test/java/com/deontakpuie/car/gallery and test for the Car Entity Class https://github.com/DTaksta/cargallery/blob/master/src/test/java/com/deontakpuie/car/gallery/domain/CarTest.java and Car Restful Service https://github.com/DTaksta/cargallery/blob/master/src/test/java/com/deontakpuie/car/gallery/web/rest/CarResourceIT.java)

    ./mvnw verify

### Client tests

Unit tests are run by [Jest][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    npm test
    
    
# Walkthrough

1 First thing, before client and server are loaded, mvnw and npm start are run.

2 Then we see both the TypeScript Client and the Java Server loaded, we can now access the app on localhost:9060

3 We Know see the Java Car Gallery Landing Page

4 We try and sign in using the User User combination 

5 We then are signed in and arrive at the landing of the app

6 We then choose to access the Cars grid from the Entities dropdown



