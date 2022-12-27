const { TestScheduler } = require("jest");
const request = require("supertest");
const app = require("./app");

describe("Testing the three general page content services are successful", () => {
    test("GET /home", () => {
        return request(app)
        .get("/home")
        .expect(200);
    });

    test("GET /projects", () => {
        return request(app)
        .get("/projects")
        .expect(200);
    });

    test("GET /contacts", () => {
        return request(app)
        .get("/contacts")
        .expect(200);
    });
});


describe("Testing the fetch methods for the updating 'ideas' and 'projects' attributes", () => {
    test("GET /ideas/fetch", () => {
        return request(app)
        .get("/ideas/fetch")
        .expect(200);
    });

    test("GET /projects/fetch", () => {
        return request(app)
        .get("/projects/fetch")
        .expect(200);
    });
});


describe("Testing that the GET methods return JSON", () => {
    test("GET /home JSON", () => {
        return request(app)
        .get("/home")
        .expect("Content-type", /json/)
    });

    test("GET /projects JSON", () => {
        return request(app)
        .get("/projects")
        .expect("Content-type", /json/)
    });

    test("GET /contact JSON", () => {
        return request(app)
        .get("/contact")
        .expect("Content-type", /json/)
    });

    test("GET /ideas/fetch JSON", () => {
        return request(app)
        .get("/ideas/fetch")
        .expect("Content-type", /json/)
    });

    test("GET /projects/fetch JSON", () => {
        return request(app)
        .get("/projects/fetch")
        .expect("Content-type", /json/)
    });
});


//Unsure why these 5 aren't working as the posts work on the webpages
describe("Testing the push methods for the adding inputs to the 'ideas' and 'projects' attributes", () => {
    test("POST /ideas/add", () => {
        const parameters = {"newIdea" : "Test"}
        return request(app)
        .post("/ideas/add")
        .send(parameterss)
        .expect(200);
    });

    test("POST /projects/add", () => {
        const parameters = {"newIdea" : "Test"}
        return request(app)
        .post("/projects/add")
        .send(parameters)
        .expect(200);
    });
});


describe("Testing the push methods return a 400 error if they are empty", () => {
    test("POST /ideas/add", () => {
        const parameters = {"newIdea" : ""}
        return request(app)
        .post("/ideas/add")
        .send(parameterss)
        .expect(400);
    });

    test("POST /projects/add", () => {
        const parameters = {"newIdea" : ""}
        return request(app)
        .post("/projects/add")
        .send(parameters)
        .expect(400);
    });
});
