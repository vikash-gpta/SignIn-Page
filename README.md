# Project Overview

This is a project where the frontend comprises of a Sign Up page where the user fills up his/her data and user has the option to select where user wants to save the data .here we have two option either data can be saved in LOCAL STORAGE or DATABASE. For database we are using a RDBMS-MYSQL and after filling up the form and selecting the storage medium then when the user clicks on the submit button then according to the choice the data is stored.

## Tech Stack 
    Front End : React JS
    Back End : Node Js & Express Js
    Database : MySQL
## Installation

The folder has two sub folders 'client' is for the FrontEnd and 'server' is for the BackEnd so let start with installing and running FrontEnd.

Node Modules are heavy so this folder will be skipped but if you download the project then run the following code to download Node Modules which the mentioned in package.json file .All the dependencies and libraries which we use are mentioned in package.json

Run the following command to  Install The Node Modules. 
       
    npm install

After Installing all the Node Modules now to run the React App 
Run the following command which will run your app in your local host
    
    npm start
And to build the project in production mode run 

    npm run build

Now to run the backend server built in node js move to the server directory and run the following command to start the server.

    cd server
    node index.js
this will start the server on PORT-3002 as we have provided port by ourself you can also change the port.

once the server starts running you can perform the required task.
