# Population API

## Description
- Population Management System manages a list of locations and the total number of residents in each location broken down by gender. 

## Getting Started

The instructions below will help get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before this application can work, you need the following:
- [NodeJS](https://nodejs.org/en/) - A platform to run javascript on the server. Nodejs Version 9.11.2 or higher is recommended.

### INSTALLING
1. Download or clone the project [here](https://github.com/adesege/population-api.git)
2. Run `npm install` to install packages. 
3. Run `npm run migrate` to run the migrations. The project uses sqlite
4. Start the server by running `npm run start:dev`.


 Test the API using `postman`. Documentation can be found [here](https://documenter.getpostman.com/view/2714219/S11DTM1R#ab94f857-1506-49b8-9d0d-f90bd53504cc)

 ### Tech
The app is built using the following tech:
1. [Express](https://expressjs.com/) as the server-side framework
2. [sqlite](https://www.sqlite.org/index.html) as database
3. [JOI](https://github.com/hapijs/joi) as the object schema validator

## Author

* **Temitayo Fadojutimi** 

## License

Population API is  [MIT licensed](./LICENSE) 
