'use strict';

console.log('The App is running');

//JSX - JavaScript XML
var user = {
    title: 'SrujanKumar',
    subtitle: 'Tirunagari'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.title
    ),
    React.createElement(
        'p',
        null,
        user.subtitle
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

/* 





var template =(
    <div>
        <h1>Srujan Kumar Tirunagari</h1>
        <p>This is My Info</p>
        <ol>
           <li>UI Developer</li>
           <li>Reactjs</li>
        </ol>
    </div>);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

var template2 =(
    <div>
    <h1>Srujan Kumar Tirunagari</h1>
    <p>Age:26</p>
    <p>Location</p>
    </div>
);


var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);

    */
