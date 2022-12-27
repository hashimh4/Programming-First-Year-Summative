// We have moved the client side JS from index.html here. ALLOWS REQUESTS TO BE SENT TO THE SERVER

/*
//Adding text to the body of the HTML after a click
//If there is a click then this function is run, including the fetch functionality where we will access something from
window.addEventListener('click', function(event) {
    fetch('http://127.0.0.1:8080/list')
//We access the text, from the response, within the body, using the success callback
    .then(response => response.text())
//We take the content ID and put in between the content we got from the request
    .then(body => document.getElementById("hellobutton").innerHTML=body)
//We catch any errors
    .catch((error) => alert(error))

})
*/

/*
background.addEventListener("mouseover", async function(event){
    try{
        let response = await fetch('http://127.0.0.1:8080/introduction');
        let body = await response.text();
        document.getElementById("introList").innerHTML=body;
//Allow the execption to be caught if there is an error
    }  catch(e) {
        alert(e);
    }
});
*/

// 'load' is also an event

/*
if (Home.clicked = true) {
    urlthing = "http://127.0.0.1:8080/home"
    clicky = Home
} else if (Projects.clicked = true) {
    urlthing = "http://127.0.0.1:8080/projects"
    clicky = "Projects"
} else if (Contact.clicked = true)) {
    urlthing = "http://127.0.0.1:8080/contact"
    clicky = "Contact"
}
*/

//
if (navigator.onLine === false) {
    alert('You have been disconnected from the server, please restart!');
 };

hello = document.getElementById('homeContent');

// HOME BUTTON GET
Home.addEventListener('click', async function (event) {
// Resets the fade-in
    document.getElementById('introList').classList = '';
    try {
        const response = await fetch('http://127.0.0.1:8080/home');
        const body = await response.json();
// Empties the list part of the header each time
        document.getElementById('introList').innerHTML = '';
        homeList(body);
// Allows the text to fade in, by applying the CSS
        document.getElementById('introList').classList.add('fadeIn');
        document.getElementById('introStuff').classList.add('fadeIn');
        document.getElementById('introTitle').innerHTML = 'INTERESTED IN TECHNOLOGY?';
        document.getElementById('introStuff').innerHTML = "<p>Hey you're back. Remember you can scroll down to share your invention idea and how you can make it. You could share:</p>";
// Displays the correct content
        document.getElementById('homeTitle').style.display = 'block';
        document.getElementById('productsTitle').style.display = 'none';
        document.getElementById('aboutTitle').style.display = 'none';
        document.getElementById('homeContent').style.display = 'block';
        document.getElementById('mainContent').style.display = 'none';
        document.getElementById('hellobutton').style.display = 'none';
        document.getElementById('hellobuttonp').style.display = 'none';
        document.getElementById('aboutContent').style.display = 'none';
// Plays the music file at the same time as the event
        document.getElementById('music').src = '/Cmaj.mp3';
// Deletes the image once it has been hovered over
        // document.getElementById("introHeader").remove();
// Allow the execption to be caught if there is an error
    } catch (e) {
        alert(e);
    }
});

function homeList (introList) {
    const container = document.getElementById('introList');
// The container is reset each time
    container.innerHTML = '';
// 'of' goes through the index and the objects
    for (const part of introList) {
        const item = document.createElement('li');
        item.innerHTML = part;
        container.appendChild(item);
    }
}

// PROJECTS BUTTON GET
// The same process for the projects button
Projects.addEventListener('click', async function (event) {
    document.getElementById('introList').classList = '';
    try {
        const response = await fetch('http://127.0.0.1:8080/projects');
        const body = await response.json();
        document.getElementById('introList').innerHTML = '';
        projectsList(body);
        document.getElementById('introList').classList.add('fadeIn');
        document.getElementById('introStuff').classList.add('fadeIn');
        document.getElementById('introTitle').innerHTML = "VIEW OTHER PEOPLE'S PROJECTS HERE";
        document.getElementById('introStuff').innerHTML = "<p>Scroll down the see other people's projects and how they made them. Maybe you could have a go and if you do make sure to let us know. Some projects which stood out to us are below:</p>";
// Displays the correct content
        document.getElementById('homeTitle').style.display = 'none';
        document.getElementById('productsTitle').style.display = 'block';
        document.getElementById('aboutTitle').style.display = 'none';
        document.getElementById('homeContent').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('hellobutton').style.display = 'block';
        document.getElementById('hellobuttonp').style.display = 'block';
        document.getElementById('aboutContent').style.display = 'none';
        document.getElementById('music').src = '/Cmaj7.mp3';
    } catch (e) {
        alert(e);
    }
});

function projectsList (introList) {
    const container = document.getElementById('introList');
    container.innerHTML = '';
    for (const part of introList) {
        const item = document.createElement('li');
        item.innerHTML = part;
        container.appendChild(item);
    }
}

// CONTACT BUTTON GET
// The same process for the projects button
Contact.addEventListener('click', async function (event) {
    document.getElementById('introList').classList = '';
    try {
        const response = await fetch('http://127.0.0.1:8080/contact');
        const body = await response.json();
        document.getElementById('introList').innerHTML = '';
        contactList(body);
        document.getElementById('introList').classList.add('fadeIn');
        document.getElementById('introStuff').classList.add('fadeIn');
        document.getElementById('introTitle').innerHTML = 'GET IN TOUCH';
        document.getElementById('introStuff').innerHTML = '<p>We love hearing from you. If you would like to contact us, please do so by one of the following methods:</p>';
// Displays the correct content
        document.getElementById('homeTitle').style.display = 'none';
        document.getElementById('productsTitle').style.display = 'none';
        document.getElementById('aboutTitle').style.display = 'block';
        document.getElementById('homeContent').style.display = 'none';
        document.getElementById('mainContent').style.display = 'none';
        document.getElementById('hellobutton').style.display = 'none';
        document.getElementById('hellobuttonp').style.display = 'none';
        document.getElementById('aboutContent').style.display = 'block';
        document.getElementById('music').src = '/Dmin.mp3';
    } catch (e) {
        alert(e);
    }
});

function contactList (introList) {
    const container = document.getElementById('introList');
    container.innerHTML = '';
    for (const part of introList) {
        const item = document.createElement('li');
        item.innerHTML = part;
        container.appendChild(item);
    }
}

// IDEAS GET
// Instead we can use async giving a promise back along with the output
// Using the newbutton id, so updates the page when the button is clicked
Projects.addEventListener('click', async function (event) {
    try {
// Await calls a function and assumes a success.
        const response = await fetch('http://127.0.0.1:8080/ideas/fetch');
        const body = await response.json();
// Same functionality but links to the function below
        listofIdeas(body);
// Allow the execption to be caught if there is an error
    } catch (e) {
        alert(e);
    }
});

function listofIdeas (ideas) {
// This is where we are putting the data in index.html
    const container = document.getElementById('hellobutton');
    // The container is reset each time
    container.innerHTML = '';
// Adds the elements of the array as a list of bullet points
    for (const idea of ideas) {
        const item = document.createElement('li');
        item.innerHTML = idea;
        container.appendChild(item);
    }
}

// IDEAS POST
const submitP = document.getElementById('submitProject');
submitP.addEventListener('click', async function (event) {
    try {
// We stop the default submit action of the form, which reloads the page
        event.preventDefault();
// We get the new idea that is entered in and add it to our list
        const newIdea = document.getElementById('newIdea').value;
// Gives a 400 error if the field is empty
        if (!newIdea) {
            response.status(400);
        } else {
            const parameters = { newIdea: newIdea };
            const response = await fetch('http://127.0.0.1:8080/ideas/add', {
                method: 'POST',
                headers: {
                    // The header must be set to JSON
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parameters)
            });
        };

        const body = await response.json();
// We need to re-render the body
        listofIdeas(body);
// Allow the execption to be caught if there is an error
    } catch (e) {
        alert(e);
    }
});

// PROJECTS GET
// Instead we can use async giving a promise back along with the output
// Using the newbutton id, so updates the page when the button is clicked
Projects.addEventListener('click', async function (event) {
    try {
// Await calls a function and assumes a success.
        const response = await fetch('http://127.0.0.1:8080/projects/fetch');
        const body = await response.json();
// Same functionality but links to the function below
        listofProjects(body);
// Allow the execption to be caught if there is an error
    } catch (e) {
        alert(e);
    }
});

function listofProjects (projects) {
// This is where we are putting the data in index.html
    const container = document.getElementById('hellobuttonp');
    // The container is reset each time
    container.innerHTML = '';
// Adds the elements of the array as a list of bullet points
    for (const project of projects) {
        const item = document.createElement('li');
        item.innerHTML = project;
        container.appendChild(item);
    }
}

// PROJECTS POST
const submit = document.getElementById('submitProject');
submit.addEventListener('click', async function (event) {
    try {
// We stop the default submit action of the form, which reloads the page
        event.preventDefault();
// An alert telling us if a submission was sent successfully
// We get the new idea that is entered in and add it to our list
        const newProject = document.getElementById('newProject').value;
        if (!newProject) {
            response.status(400);
        } else {
            alert('Your submission was sent!');
            const parameters = { newProject: newProject };
            const response = await fetch('http://127.0.0.1:8080/projects/add', {
                method: 'POST',
                headers: {
                    // The header must be set to JSON
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parameters)
            });
        };
        const body = await response.json();
// We need to re-render the body
        listofProjects(body);
// Allow the execption to be caught if there is an error
    } catch (e) {
        alert(e);
    }
});
