// Import express to pick out the GET encoded requests (for express routing)
const express = require('express');
// Create a server
const app = express();

// Adding middlewear (a filter for incoming requests before functions that are applied directly) - the 'Client' directory including sounds, images etc.
app.use(express.static('Client'));
// Parsing (analysing) the JSON
app.use(express.json());

/* var fs = require("fs");
fs.readFile("./homeList.txt", function(text){
    var textByLine = text.split("\n")
}); */

const homeList = ['DIY Projects', 'Raspberry Pi Projects', 'Arduino Projects', 'Anything else you can think of...'];
const projectsList = ['High-five-a-tron', 'A digital thermometer'];
const contactList = ['Email: ilovetech@realemail.com', 'Phone: 0191 334 2000', 'Twitter: @theRealSueBlack'];

// ADD TO A TEXT FILE
const ideas = ['Chess engine', 'High-five-a-tron', 'A digital thermometer'];

const projects = ['Generate a random legal move, create an evalution function to choose the move that will get the most points, create a tree to look at the next steps and backtrack to find the best route to take, delete trivial routes', 'Connect an arduino to two servos, program these servos to rotate (90 degrees and 180 degrees) one after another, use one arduino to pull a spring attached to a piece of wood attached to a hinge and use the other arduino to hold the piece of wood in place, add structural improvements and a stopper at the top', 'Connect a thermistor to an arduino and program the arduino'];

app.get('/home', function (request, response) {
  response.json(homeList);
});

app.get('/projects', function (request, response) {
  response.json(projectsList);
});

app.get('/contact', function (request, response) {
  response.json(contactList);
});

// Each entity will have 2 GET requests and 1 POST request

/*
//Adding GET routes. THE SERVER SENDS BACK REQUESTS ALLOWING THE PAGE TO BE UPDATED
//If we get a request from the root then take the incoming request and the pre-build response object (which we can send soclcing to)
//If it ends in /
app.get('/', function(request, response){
    response.send('Hello world');
})

//Another route path but if it has an 'a' in it
app.get(/a/, function (request, response) {
    thing_with_a = parseInt(request.params.thing_with_a)
    response.send('Hey your URL has an a in it')
})

//Looking for a query with 'r' and gives out a random number less than that e.g. r?max=6
app.get('/r', function(request, response){
    max = parseInt(request.query.max)
    rand = Math.floor(Math.random()*max) +1
    console.log('Max via query is ' + max + ' rand is ' + rand) //Shown in the command line
    response.send('' + rand)
  })

//A route path if a query with a person's name has been received
app.get('/r', function(request, response){
    person = parseInt(request.query.person)
    response.send('Ah you are a person - hello')
  })
*/

// When the button is clicked, the list of ideas is sent as JSON to the index
app.get('/ideas/fetch', function (request, response) {
  response.json(ideas);
});

// We take the input from the request and add it to the ideas array
app.post('/ideas/add', function (request, response) {
  const newIdea = request.body.newIdea;
  ideas.push(newIdea);
});

// When the button is clicked, the list of projects is sent as JSON to the index
app.get('/projects/fetch', function (request, response) {
  response.json(projects);
});

// We take the input from the request and add it to the ideas array
app.post('/projects/add', function (request, response) {
  const newProject = request.body.newProject;
  projects.push(newProject);
});

/*
//If it's anything else
app.get('/*', function (request, response) {
  response.send('Please go back to a valid URL');
})
*/

module.exports = app;
