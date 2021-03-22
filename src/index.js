import './index.css';

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello World, env is: ' + process.env.NODE_ENV;
  
    return element;
}
  
document.body.appendChild(component());
