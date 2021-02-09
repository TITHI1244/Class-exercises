// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const title = require("./title_creator.js");
const get_skill = require('./get_skill');
const get_education = require('./get_education');
const get_project = require('./get_project');

function getSkills() {
  const skillsArray = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Node.js', 'React.js', 'Git', 'MySQL'];
  const getAllSkills = skillsArray.map(skill => get_skill(skill));
  return getAllSkills.join('');
}

function getEducations() {
  const myEducations = [
    {title: 'Full-stack web development course',
      institutuion: 'Hack Your Future',
      passingYear: 2021},
    {title: 'BSc in Electronics Engineering',
      institutuion: 'Khulna Engineering University',
      passingYear: 2012}
  ];
  const getAllSkills = myEducations.map(education => get_education(education.title, education.institutuion, education.passingYear));
  return getAllSkills.join('');
}

function getProjects() {
  const myProjects = [
    {title: 'Shopping cart',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sourceCode: 'https://www.github.com/',
      preview: 'https://www.google.com/',
      image: 'https://picsum.photos/200/300'},
    {title: 'Giphy api',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sourceCode: 'https://www.github.com/',
      preview: 'https://www.google.com/',
      image: 'https://picsum.photos/200/300'}
  ];
  const getAllProjects = myProjects.map(project => get_project(project.title, project.description, project.sourceCode, project.preview, project.image));
  return getAllProjects.join('');
}

app.get("/", (request, response) => {
  response.send(`
    ${title('Home')}
    <body>
        <h1>Home</h1>
        <h2>Tithi Kundu</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
    ${title('Contact')}
    <body>
        <h1>Contact</h1>
        <p>This is a contact page</p>
        <ul>
            <li><a href="https://www.facebook.com/">My facebook</a></li>
            <li><a href="https://twitter.com/?lang=en">My twitter</a></li>
            <li><a href="mailto: abc@example.com"></a>Send me a mail </li>
        </ul>
    </body>
  `);
});

app.get("/education", (request, response) => {
  response.send(`
    ${title('Education')}
    <body>
        <h1>My education</h1>
        <p>This is my education page</p>
        <div>
            ${getEducations()}
        </div>
    </body>
  `);
});

app.get("/skills", (request, response) => {
  response.send(`
    ${title('Skills')}
    <body>
        <h1>Skills</h1>
        <p>This is my skills page</p>
        <ul>
          ${getSkills()}
        </ul>
    </body>
  `);
});

app.get("/projects", (request, response) => {
  response.send(`
    ${title('Projects')}
    <head>
        <title>Projects</title>
    </head>
    <body>
        <h1>Projects</h1>
        <p>This is my projects page</p> 
        <div>
            ${getProjects()}
        </div>
    </body>
  `);
});

app.get('/test-report', function(requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
