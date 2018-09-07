// imports HTML and CSS files for UI
import html from './message.html';
import './message.css';


let elements = [];
let body;




export function showUI(text) {
    // convert plain HTML string into DOM elements

    // creates <section>
    let temporary = document.createElement('section');

    // sets the html in temporary variable
    temporary.innerHTML = html;


    // grabs first html element with a class 'js-widget-dialog' and assigns text parameter to temporary
    // textContent gets the content of all elements, including <script> and <style> elements
    temporary.getElementsByClassName('js-widget-dialog js-widget-title').textContent = text;


    // assigns <body> to body variable
    body = document.getElementsByTagName('body')[0];

    // temporary.children.length -> counts the number of elements
    while (temporary.children.length > 0) {
        // adds elements to an element array (to the end of an array)
        elements.push(temporary.children[0]);

        // temporary.children[0] to body body variable
        body.appendChild(temporary.children[0]);
    }

    body.addEventListener('click', close);
}



export function close() {
    while (elements.length > 0) {
        // removes the last element from elements array
        elements.pop().remove();
    }
    body.removeEventListener('click', close);
}

