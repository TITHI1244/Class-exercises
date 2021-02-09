const createTitle = (title) => 
    `<head>
        <title>${title}</title>
        <style>
            body {
                background-color: aqua;
                color: blue;
                text-align: center;
            }
            li {
                list-style-type: none;
            }
            div {
                margin: 1% 10%;
                padding: 5px;
            }
        </style>
    </head>
    `
;
module.exports = createTitle; 