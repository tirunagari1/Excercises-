console.log('App is running');
//If Statements
//Ternary operators
//Logical & Operators
const app = {
  title : 'Indecision App',
  subtitle:'Put ur life in hands of a computer',
  options:['One', 'Two']
};
 const template =(
   <div>
        <h1>{app.title}</h1>  
        {app.subtitle && <p>subtitle: {app.subtitle}</p>}
        <p>{app.options.length>=0 ? 'Here are your options' : 'No Options'} </p>
   
   </div>
 );

  var user={
    title: 'SrujanKumar',
    subtitle: 'Tirunagari'
    }

/*    var template = (
    <div>
    <h1>{user.title}</h1>
    <p>{user.subtitle}</p>
    </div>
); */

/* 
var template1 =(
    <div>
        <h1>Srujan Kumar Tirunagari</h1>
        <p>This is My Info</p>
        <ol>
           <li>UI Developer</li>
           <li>Reactjs Doest </li>
        </ol>
    </div>);



 var template2 =(
    <div>
    <h1>Srujan Kumar Tirunagari</h1>
    <p>Age:26</p>
    <p>Location</p>
    </div>
  );
 */
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);