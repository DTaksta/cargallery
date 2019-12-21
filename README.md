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

Tomcat Server

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

![Pre Servers Running](https://github.com/DTaksta/cargallery/blob/master/webpack/beforeServerAndClientStart.JPG)

2 Then we see both the TypeScript Client and the Java Server loaded, we can now access the app on localhost:9060

![Both Server Running](https://github.com/DTaksta/cargallery/blob/master/webpack/clientAndServerLoadedFull.png)

3 We Know see the Java Car Gallery Landing Page

![Landing Page](https://github.com/DTaksta/cargallery/blob/master/webpack/javaCarGalleryLandingPage.JPG)

4 We try and sign in using the User User combination 

![SignIn Form](https://github.com/DTaksta/cargallery/blob/master/webpack/signInFormWithDefaultUserUser.JPG)

5 We then are signed in and arrive at the landing of the app

![Signed In Successfully](https://github.com/DTaksta/cargallery/blob/master/webpack/SignedInSelectCarsEntity.JPG)

6 We then choose to access the Cars grid from the Entities dropdown and are then presented with a Car Grid Filled with Dummy Data supplied by Faker.IO which seeds data that more or less does not violate field types but does is not real car data so we will add our own real data next.

![Car Grid With Dummy Data](https://github.com/DTaksta/cargallery/blob/master/webpack/sampleCarGridWithDummyDaterByFakerIO.JPG)

7 We then create a new car and taken to new car page

![Create New Car](https://github.com/DTaksta/cargallery/blob/master/webpack/createNewCarPage.JPG)

8 We try and create a Kia Rio model but forget to fill in year and are reminded for it

![KIA RIO Missing Year](https://github.com/DTaksta/cargallery/blob/master/webpack/createNewCarPage-ValidationMissingYear.JPG)
9 We then fill in the correct information and submit

![KIA RIO New Car Correct Info](https://github.com/DTaksta/cargallery/blob/master/webpack/newCarComplete.JPG)

10 We try and view that car, and also notice that we can change the currency of price, which we do in ZA,
this code can be found https://github.com/DTaksta/cargallery/blob/master/src/main/webapp/app/entities/car/car-detail.tsx which uses exchangerates.io for the rates.

![KIA RIO View](https://github.com/DTaksta/cargallery/blob/master/webpack/KiaRioViewInRands.JPG)

11 We then try and edit Kia and put in a string for mileage and are told it can only be a number

![KIA Mileage Should Be A Number](https://github.com/DTaksta/cargallery/blob/master/webpack/KiaEditMileageValidation.JPG)

12 We then change the year, leaving mileage as a number and see our result reflect successfully 

![Kia Edited Succesfully](https://github.com/DTaksta/cargallery/blob/master/webpack/KiaRioEditReflecting.JPG)

13 As Can be seen above we also added a Ferrari, Porsche, and Aston Martin, but with all that elegance let us delete one, the Aston Martin.

![Before Aston Delete](https://github.com/DTaksta/cargallery/blob/master/webpack/KiaRioEditReflecting.JPG)

and after click delete we get a warning

![Before Delete Warning](https://github.com/DTaksta/cargallery/blob/master/webpack/deleteWarningAstonMartin.JPG)

and we click yes, and see that Aston Martin is no longer there

![Aston Martin Delete Success](https://github.com/DTaksta/cargallery/blob/master/webpack/AstonMartinDeleteSuccess.JPG)


