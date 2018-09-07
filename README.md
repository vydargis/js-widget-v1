## JavaScript Widget



## Why use Webpack for this (I guess):

Have a good structure for separation of concerns and test-ability, which means proper module loading

Convenient development experience via hot-module reloading (https://webpack.js.org/concepts/hot-module-replacement/)

Use Babel for trasnpile ES6 to ES5


### JavaScript Widget
This is a template for building JavaScript widget. 


### Notes From Stackoverflow
https://stackoverflow.com/questions/2411501/creating-a-javascript-widget-for-other-sites

1 To prevent any interaction with a widget, put it in a self-executing function in a closure and don't create any global variables at all.

2Let user to interact with a widget, say for adding event listeners and such, claim a single global variable, let's say ExampleComWidget as an object literal and put your methods there. User's could then interact like: ExampleComWidget.addListener('update', callback);

3 Use clever markup: catchoom-widget-item

4 Fetch data from your site by inserting script elements
- This is a fool-proof way to ensure that you get around the same-origin restrictions.

- Attach an onload-listener to the script element to know when the data is ready, or use jsonp



### CSS
One down side that you need to be aware of. In this solution the CSS is not isolated from the rest of the styles on page - it's injected into the page itself under dynamically added style tag. 
