const add_project = (title, description, sourceCode, preview, image) => 
    `<li>
        <h3>Title: ${title}</h3>
        <h3>${description}</h3> <br>
        <h3><a href=${sourceCode}>Source code</a></h3> <br>
        <h3><a href=${preview}>Preview of the project</a></h3> <br>
        <h3><img src=${image} alt=${title}></img></h3>
    </li>`
;
module.exports = add_project;