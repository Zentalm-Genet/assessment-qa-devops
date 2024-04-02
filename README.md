# Duel Duo Project README
# Introduction

Welcome to the Duel Duo project! This project is designed to help you practice and solidify the skills you learned in this module.

# Setup

    Download the code required for this project.
    Navigate to the downloaded folder in the command line.
    Install dependencies by running npm install.

# Part 1: Server Setup

Start by setting up your server to serve static files and prepare it for deployment.

    Open server.js and set up middleware and/or endpoints to serve files from the public folder.
    Start the app by running npm start.
    Play a few games of Duel Duo in your web browser to familiarize yourself with the interface.
    Explore public/index.js to understand the functionality of the JavaScript code.
    Remember to stop the server with ctrl + c in the terminal.

# Part 2: Manual Testing

Draft a plan to test the game, conduct your testing, and document any bugs you find. Ensure you document your testing process in a separate document and save it to your project folder.

# Part 3: Unit Tests

Write at least 2 tests for the shuffle function in the __tests__/shuffle.test.js file using Jest.

# Part 4: Write Automated Tests

Write at least 2 automated tests for the game in the __tests__/duelDuo.test.js file.
# Part 5: Rollbar Integration

Set up Rollbar in server.js to log information and errors about your app. Create a new project in Rollbar and use the access token to connect your app.
Part 6: Deployment

    Add and commit your code.
    Set up a repository in GitHub.
    Connect your remote repository and push your code.
    Set up a new app in AWS EC2 to deploy your repository.
    Include the public IP address of your instance in the ec2.md document.
    Interact with your live site and check Rollbar for logs.

Request Address

Ensure that the base URL in Axios requests is updated to match your IP address.
# Extra Credit: Deployment Sketch

Draw a sketch/picture illustrating the deployment process as it relates to the broader web application development process. Include GitHub, your local development environment, and different parts of the web application in the sketch. This will serve as a visual aid for understanding deployment in the context of web application development.